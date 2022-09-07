import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Strings from '../../assets/Strings';
import Button from '../Button';
import TextInput from '../TextInput';
import getStyles from './UserAuthForm.styles';

const UserAuthForm = ({
  title,
  subTitle,
  email,
  password,
  onEmailUpdate,
  onPasswordUpdate,
  isUserRegistering,
  onButtonPress,
  passwordHidden,
  passwordHiddenToggle,
  recoverPassword,
}) => {
  const styles = getStyles();

  return (
    <View>
      <View style={styles.message}>
        <Text style={styles.messageTitle}>{title}</Text>
        <Text style={styles.messageSubtitle}>{subTitle}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={'Email'}
          secureText={false}
          value={email}
          onTextUpdate={onEmailUpdate}
          style={styles.textInput}
        />
        <TextInput
          placeholder={'Password'}
          secureText={true}
          isSecureTextHidden={passwordHidden}
          value={password}
          onTextUpdate={onPasswordUpdate}
          onSecureTextToggle={passwordHiddenToggle}
          style={styles.textInput}
        />
      </View>
      {!isUserRegistering && (
        <TouchableOpacity
          onPress={recoverPassword}
          style={styles.recoverPasswordContainer}
        >
          <Text style={styles.recoverPasswordText}>
            {Strings.signIn.recoverPassword}
          </Text>
        </TouchableOpacity>
      )}
      <Button
        title={isUserRegistering ? 'Sign Up' : 'Sign In'}
        onPress={onButtonPress}
        style={styles.button}
      />
    </View>
  );
};

export default UserAuthForm;
