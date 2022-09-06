import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import TextInput from '../TextInput';
import getStyles from './UserAuthForm.styles';

const UserAuthForm = ({
  email,
  password,
  onEmailUpdate,
  onPasswordUpdate,
  isUserRegistering,
  onButtonPress,
  passwordHidden,
  passwordHiddenToggle,
}) => {
  const styles = getStyles();

  return (
    <View>
      <View style={styles.message}>
        <Text style={styles.messageTitle}>Hello Again!</Text>
        <Text style={styles.messageSubtitle}>
          Welcome back, you've been missed!
        </Text>
      </View>
      <TextInput
        placeholder={'Email'}
        secureText={false}
        value={email}
        onTextUpdate={onEmailUpdate}
      />
      <TextInput
        placeholder={'Password'}
        secureText={true}
        isSecureTextHidden={passwordHidden}
        value={password}
        onTextUpdate={onPasswordUpdate}
        onSecureTextToggle={passwordHiddenToggle}
      />
      <Button
        title={isUserRegistering ? 'Sign Up' : 'Sign In'}
        onPress={onButtonPress}
      />
    </View>
  );
};

export default UserAuthForm;
