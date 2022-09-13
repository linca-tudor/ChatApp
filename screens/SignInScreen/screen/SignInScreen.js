import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import getStyles from './SignInScreen.styles';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import Screen from '../../../components/Screen';
import UserForm from '../../../components/UserForm';

const SignInScreen = ({
  signIn,
  recoverPassword,
  err,
  passwordHidden,
  passwordHiddenToggle,
  onBottomLinkPress,
}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [email, setEmail] = useState('mail.tudorlinca+chatapp@gmail.com');
  const [password, setPassword] = useState('123456789');
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
        <UserForm
          title={Strings.signIn.title}
          subTitle={Strings.signIn.subTitle}
          email={email}
          isEmailInputShown
          password={password}
          isPasswordInputShown
          onEmailUpdate={(text) => setEmail(text)}
          onPasswordUpdate={(text) => setPassword(text)}
          isRecoverPasswordHidden={false}
          onButtonPress={() => signIn(email, password)}
          passwordHidden={passwordHidden}
          passwordHiddenToggle={passwordHiddenToggle}
          recoverPassword={() => recoverPassword(email)}
          buttonTitle={Strings.signIn.buttonTitle}
        />
        <View style={styles.notRegisteredContainer}>
          <Text style={styles.notRegisteredText}>
            {Strings.signIn.notRegistered}
          </Text>
          <TouchableOpacity onPress={onBottomLinkPress}>
            <Text style={styles.notRegisteredRoute}>
              {Strings.signIn.notRegisteredRoute}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default SignInScreen;
