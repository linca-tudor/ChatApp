import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import getStyles from './SignUpScreen.styles';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import Screen from '../../../components/Screen';
import UserAuthForm from '../../../components/UserAuthForm';

const SignUpScreen = ({
  signUp,
  err,
  passwordHidden,
  passwordHiddenToggle,
  onBottomLinkPress,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const styles = getStyles();

  useEffect(() => {
    setError(err);
  }, [err]);

  return (
    <Screen backgroundColor={Colors.lavenderMist}>
      <View style={[styles.flex, styles.container]}>
        {!!error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        <UserAuthForm
          title={Strings.signUp.title}
          subTitle={Strings.signUp.subTitle}
          email={email}
          isEmailInputShown
          password={password}
          isPasswordInputShown
          onEmailUpdate={(text) => setEmail(text)}
          onPasswordUpdate={(text) => setPassword(text)}
          isRecoverPassHidden={true}
          onButtonPress={() => signUp(email, password)}
          passwordHidden={passwordHidden}
          passwordHiddenToggle={passwordHiddenToggle}
          buttonTitle={Strings.signUp.buttonTitle}
        />
        <View style={styles.alreadyRegisteredContainer}>
          <Text style={styles.alreadyRegisteredText}>
            {Strings.signUp.alreadyRegistered}
          </Text>
          <TouchableOpacity onPress={onBottomLinkPress}>
            <Text style={styles.alreadyRegisteredRoute}>
              {Strings.signUp.alreadyRegisteredRoute}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default SignUpScreen;
