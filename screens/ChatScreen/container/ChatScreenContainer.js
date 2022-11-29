import React, { useState, useEffect, useCallback } from 'react';
import ChatScreen from '../screen';
import { GiftedChat } from 'react-native-gifted-chat';
import { getAuth } from 'firebase/auth';
import {
  ref,
  onChildAdded,
  serverTimestamp,
  push,
  update,
  set,
} from 'firebase/database';
import { database } from '../../../config/firebase';
import {
  pickCameraImage,
  pickGalleryImage,
} from '../../../utils/helpers/pickImage';

const ChatScreenContainer = () => {
  const [messages, setMessages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      return GiftedChat.append(previousMessages, [message]);
    });
  };

  const deleteAppendedMessage = (messageID) => {
    setMessages((previousMessages) => {
      return previousMessages.filter((message) => message._id !== messageID);
    });
  };

  const updadeMessage = (path, object) => {
    const tempRef = ref(database, `messages/${path}`);
    update(tempRef, object)
      .then(() => {
        console.log('Data updated');
      })
      .catch((e) => {
        console.log(e);
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
      message.received = true;
      message.text = message.text.trim();
    });
    uploadMessage(messages);
  };

  const onStart = async (localURI, uuid) => {
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
    setIsModalVisible(false);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onComplete = useCallback(
    (fileUrl, uuid) => {
      const message = {
        _id: uuid,
        createdAt: serverTimestamp(),
        image: fileUrl,
        sent: true,
        received: true,
        user: {
          _id: uid,
          name: displayName,
          avatar: photoURL,
        },
      };

      deleteAppendedMessage(uuid);
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
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onPickImagePress={() =>
        pickGalleryImage(
          {
            onStart,
            onProgress,
            onComplete,
            onFail,
          },
          'messages'
        )
      }
      onOpenCameraPress={() =>
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
