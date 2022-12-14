import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Strings from '../../assets/Strings';
import Button from '../Button';
import TextInput from '../TextInput';
import getStyles from './UserForm.styles';

const UserForm = ({
  title,
  subTitle,
  email,
  password,
  isEmailInputShown,
  isPasswordInputShown,
  onEmailUpdate,
  onPasswordUpdate,
  isRecoverPassHidden,
  onButtonPress,
  passwordHidden,
  passwordHiddenToggle,
  recoverPassword,
  buttonTitle,
}) => {
  const styles = getStyles();

  return (
    <View>
      <View style={styles.message}>
        <Text style={styles.messageTitle}>{title}</Text>
        <Text style={styles.messageSubtitle}>{subTitle}</Text>
      </View>
      <View style={styles.textInputContainer}>
        {isEmailInputShown && (
          <TextInput
            placeholder={Strings.general.email}
            secureText={false}
            value={email}
            onTextUpdate={onEmailUpdate}
            style={styles.textInput}
          />
        )}
        {isPasswordInputShown && (
          <>
            <TextInput
              placeholder={Strings.general.password}
              secureText={true}
              isSecureTextHidden={passwordHidden}
              value={password}
              onTextUpdate={onPasswordUpdate}
              onSecureTextToggle={passwordHiddenToggle}
              style={styles.textInput}
            />
          </>
        )}
      </View>
      {!isRecoverPassHidden && (
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
        title={buttonTitle}
        onPress={onButtonPress}
        style={styles.button}
      />
    </View>
  );
};

export default UserForm;
