import React, { useState, useEffect, useCallback } from 'react';
import ChatScreen from '../screen';
import { GiftedChat } from 'react-native-gifted-chat';
import useAuthentication from '../../../utils/hooks';
import { getAuth } from 'firebase/auth';
import {
  ref,
  onChildAdded,
  serverTimestamp,
  push,
  onValue,
} from 'firebase/database';
import { database } from '../../../config/firebase';
import { pickCameraImage } from '../../../utils/helpers/pickImage';
import { uuidv4 } from '@firebase/util';

const ChatScreenContainer = () => {
  const [pendingID, setPendingID] = useState('');
  const [messages, setMessages] = useState([]);
  const [isUploading, setIsUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const auth = getAuth();
  const { uid, photoURL, displayName } = auth.currentUser;

  const databaseRef = ref(database, 'messages');

  useEffect(() => {
    const unsubscribe = onChildAdded(databaseRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        appendMessage(data);
      } else {
        console.log('Snapshot data NOT EXIST \n');
      }
    });

    return unsubscribe;
  }, []);

  const appendMessage = (message) => {
    setMessages((previousMessages) => {
      previousMessages?.filter((m) => m._id !== message._id);
      return GiftedChat.append(previousMessages, [message]);
    });
  };

  const uploadMessage = (messages) => {
    messages.forEach((message) => {
      push(databaseRef, message);
    });
  };

  const onSendPress = (messages = []) => {
    messages.forEach((message) => {
      message.createdAt = serverTimestamp();
      message.sent = true;
    });
    uploadMessage(messages);
  };

  const setPendingIDState = async () => {
    setPendingID(uuidv4());
  };

  const onStart = async (localURI) => {
  await setPendingIDState;
    const message = {
      _id: uuid,
      text: '',
      createdAt: new Date(),
      user: {
        _id: uid,
        name: displayName,
        avatar: photoURL,
      },
      image: localURI,
      pending: true,
    };
    appendMessage(message);
    setIsUploading(true);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onComplete = useCallback(
    (fileUrl) => {
      const message = {
        _id: uuid,
        createdAt: serverTimestamp(),
        user: {
          _id: uid,
          name: displayName,
          avatar: photoURL,
        },
        image: fileUrl,
        sent: true,
      };
      uploadMessage([message]);
      setIsUploading(false);
    },
    [uid, displayName, photoURL]
  );

  const onFail = (error) => {
    console.log(('File Upload Error is: ', error));
    setIsUploading(false);
    alert('Attachment upload failed!');
  };

  return (
    <ChatScreen
      messages={messages}
      onSendPress={onSendPress}
      onAttachPress={() =>
        pickCameraImage(
          {
            onStart,
            onProgress,
            onComplete,
            onFail,
          },
          'messages'
        )
      }
      userId={uid}
      userName={displayName}
      userPhoto={photoURL}
    />
  );
};

export default ChatScreenContainer;
