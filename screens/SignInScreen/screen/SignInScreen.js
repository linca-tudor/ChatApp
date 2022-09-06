import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import getStyles from './SignInScreen.styles';
import Colors from '../../../assets/Colors';
import Screen from '../../../components/Screen';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';

const SignInScreen = ({
  signIn,
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
            <Text>{error}</Text>
          </View>
        )}
        <TextInput
          placeholder={'Email'}
          secureText={false}
          value={email}
          onTextUpdate={(text) => setEmail(text)}
        />
        <TextInput
          placeholder={'Password'}
          secureText={true}
          isSecureTextHidden={passwordHidden}
          value={password}
          onTextUpdate={(text) => setPassword(text)}
          onSecureTextToggle={passwordHiddenToggle}
        />
        <Button title={'Sign In'} onPress={() => signIn(email, password)} />
      </View>
    </Screen>
  );
};

export default SignInScreen;
