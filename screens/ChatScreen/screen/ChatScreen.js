import React from 'react';
import { Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from '../../../components/Button';
import getStyles from './ChatScreen.styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../assets/Colors';

const ChatScreen = ({
  onSendPress,
  onAttachPress,
  messages,
  userId,
  userName,
  userPhoto,
}) => {
  const styles = getStyles();
  const renderActions = () => {
    return (
      <TouchableOpacity onPress={onAttachPress}>
        <Ionicons name="attach" size={30} color={Colors.ultramarineBlue} />
      </TouchableOpacity>
    );
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={onSendPress}
      user={{
        _id: userId,
        name: userName,
        avatar: userPhoto,
      }}
      renderActions={renderActions}
    />
  );
};

export default ChatScreen;
