import React from 'react';
import { Text, View } from 'react-native';
import { GiftedChat, Day, Bubble } from 'react-native-gifted-chat';
import { Button } from '../../../components/Button';
import getStyles from './ChatScreen.styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../assets/Colors';
import { isSameDay } from 'react-native-gifted-chat';
import moment from 'moment';
import { SafeAreaView } from 'react-native';

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
  const renderInputToolbar = (props) => {
    //Add the extra styles via containerStyle
    return (
      <Text
        {...props}
        containerStyle={{ borderTopWidth: 1.5, borderTopColor: '#333' }}
      >
        {' '}
        Input Toolbar{' '}
      </Text>
    );
  };

  const renderDay = (dayProps) => {
    const { currentMessage, previousMessage } = dayProps;

    if (currentMessage == null || isSameDay(currentMessage, previousMessage)) {
      return null;
    }

    return (
      <View style={styles.messageDateContainer}>
        <Text>
          {moment().calendar(currentMessage.createdAt, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'DD.MM.YYYY',
          })}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.flex, styles.chatContaner]}>
      <GiftedChat
        listViewProps={{
          style: {
            backgroundColor: Colors.lavenderMist,
          },
        }}
        messages={messages}
        onSend={onSendPress}
        user={{
          _id: userId,
          name: userName,
          avatar: userPhoto,
        }}
        renderActions={renderActions}
        renderDay={renderDay}
        showAvatarForEveryMessage
        showUserAvatar
        renderUsernameOnMessage
        keyboardVerticalOffset
        wrapInSafeArea={false}
        loadEarlier
        infiniteScroll
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
