import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import getStyles from './ChatScreen.styles';
import Colors from '../../../assets/Colors';
import {
  GiftedChat,
  isSameDay,
  isSameUser,
  InputToolbar,
  Composer,
  Send,
  Bubble,
  Message,
} from 'react-native-gifted-chat';
import moment from 'moment';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { withTiming } from 'react-native-reanimated';
import MediaUploadModal from '../../../components/MediaUploadModal';

const ChatScreen = ({
  onSendPress,
  isModalVisible,
  setIsModalVisible,
  onOpenCameraPress,
  onPickImagePress,
  messages,
  userId,
  userName,
  userPhoto,
}) => {
  const styles = getStyles();

  const renderActions = (props) => {
    return (
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Ionicons name="attach" size={30} color={Colors.watermelon} />
      </TouchableOpacity>
    );
  };

  const renderSend = (props) => {
    const { text } = props;

    return (
      <Send
        {...props}
        alwaysShowSend
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 7.5,
        }}
      >
        <Animated.View
          style={useAnimatedStyle(() => {
            return {
              opacity: withTiming(text?.trim().length > 0 ? 1 : 0, {
                duration: 250,
              }),
            };
          })}
        >
          <MaterialCommunityIcons
            name="arrow-up-right"
            size={28}
            color={Colors.watermelon}
          />
        </Animated.View>
      </Send>
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: Colors.white,
          paddingTop: 5,
          paddingHorizontal: 10,
          paddingBottom: Platform.select({ ios: 0, android: 7.5 }),
        }}
        primaryStyle={{ alignItems: 'center' }}
      />
    );
  };

  const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={{
        color: Colors.black,
        backgroundColor: Colors.white,
        paddingTop: 9,
        fontSize: 16.5,
        justifyContent: 'center',
      }}
    />
  );

  const renderDay = (props) => {
    const { currentMessage, previousMessage } = props;

    if (currentMessage == null || isSameDay(currentMessage, previousMessage)) {
      return null;
    }

    return (
      <View style={styles.messageDateContainer}>
        <Text>
          {moment(currentMessage.createdAt).calendar(null, {
            sameDay: '[Today]',
            lastDay: '[Yesterday]',
            lastWeek: 'dddd',
            sameElse: 'D MMM',
          })}
        </Text>
      </View>
    );
  };

  const renderMessage = (messageProps) => {
    const { currentMessage, previousMessage } = messageProps;

    const sameUser = isSameUser(currentMessage, previousMessage);
    const isCurrentUserMessage = currentMessage.user._id === userId;

    return (
      <Message
        {...messageProps}
        containerStyle={{
          left: { marginTop: sameUser ? 0 : 4 },
          right: { marginTop: sameUser ? 0 : 4 },
        }}
        renderBubble={(bubbleProps) => {
          return (
            <View>
              {!sameUser && !isCurrentUserMessage && (
                <Text style={styles.userName}>{currentMessage.user.name}</Text>
              )}
              <Bubble
                {...bubbleProps}
                wrapperStyle={{
                  left: {
                    marginBottom: 5,
                  },
                  right: {
                    backgroundColor: Colors.watermelon,
                    marginBottom: 5,
                  },
                }}
              />
            </View>
          );
        }}
      />
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
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderActions={renderActions}
        renderDay={renderDay}
        renderMessage={renderMessage}
        renderLoadEarlier={() => {}}
        keyboardVerticalOffset
        wrapInSafeArea={false}
        loadEarlier
        infiniteScroll
        renderAvatarOnTop={true}
      />
      <MediaUploadModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onCameraPress={onOpenCameraPress}
        onGalleryPress={onPickImagePress}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
