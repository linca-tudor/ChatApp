import React, { useState, useEffect, useCallback } from 'react';
import ChatScreen from '../screen';
import { GiftedChat } from 'react-native-gifted-chat';
import useAuthentication from '../../../utils/hooks';
import { getAuth } from 'firebase/auth';
import {
  get,
  limitToLast,
  ref,
  onChildAdded,
  serverTimestamp,
  push,
  set,
} from 'firebase/database';
import { database } from '../../../config/firebase';

const ChatScreenContainer = () => {
  const [messages, setMessages] = useState([]);
  const auth = getAuth();
  const { uid, photoURL, displayName } = auth.currentUser;

  const databaseRef = ref(database, 'messages');

  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },

    //   {
    //     _id: '1CtXEL9v7hfgmsGOYT864HzgaGi1',
    //     createdAt: '2022-09-15T15:53:59.830Z',
    //     text: 'Kdnchdjsodnf',
    //     user: {
    //       _id: '2',
    //       avatar:
    //         'https://firebasestorage.googleapis.com/v0/b/chatapp-af6ec.appspot.com/o/images%2FprofilePic%2Fa00d4bb3-9f62-4c3b-8a4c-84e5caf08ead.jpg?alt=media&token=20f4bd97-5ca6-4a7b-91bf-612a1d58a7e8',
    //       name: 'Tudor Linca',
    //     },
    //   },
    // ]);
    const unsubscribe = onChildAdded(databaseRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Snapshot data is: ', data, '\n');
        appendMessage(data);
      } else {
        console.log('Snapshot data NOT EXIST \n');
      }
    });

    return unsubscribe;
  }, []);

  const appendMessage = (message) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [message])
    );
  };

  const uploadMessage = (messages) => {
    messages.forEach((message) => {
      push(databaseRef, message);
      // console.log('Message is: ', message, '\n');
    });
  };

  const timestamp = () => {
    return get(serverTimestamp());
  };

  const onSend = (messages = []) => {
    console.log('sent msg is: ', messages);
    uploadMessage(messages);
  };

  return (
    <ChatScreen
      messages={messages}
      onSend={onSend}
      userId={uid}
      userName={displayName}
      userPhoto={photoURL}
    />
  );
};

export default ChatScreenContainer;
