import React from 'react';
import { Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from '../../../components/Button';
import getStyles from './ChatScreen.styles';

const ChatScreen = ({ onSend, messages, userId, userName, userPhoto }) => {
  const styles = getStyles();
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userId,
        name: userName,
        avatar: userPhoto,
      }}
    />
  );
};

export default ChatScreen;
