import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import getStyles from './SignInScreen.styles';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import Screen from '../../../components/Screen';
import UserAuthForm from '../../../components/UserAuthForm';

const SignInScreen = ({
  signIn,
  recoverPassword,
  err,
  passwordHidden,
  passwordHiddenToggle,
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
          title={Strings.signIn.title}
          subTitle={Strings.signIn.subTitle}
          email={email}
          password={password}
          onEmailUpdate={(text) => setEmail(text)}
          onPasswordUpdate={(text) => setPassword(text)}
          isUserRegistering={false}
          onButtonPress={() => signIn(email, password)}
          passwordHidden={passwordHidden}
          passwordHiddenToggle={passwordHiddenToggle}
          recoverPassword={() => recoverPassword(email)}
        />
      </View>
    </Screen>
  );
};

export default SignInScreen;
