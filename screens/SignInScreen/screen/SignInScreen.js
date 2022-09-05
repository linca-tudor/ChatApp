import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import getStyles from './SignInScreen.styles';
import Header from '../../../components/Header';
import Colors from '../../../assets/Colors';
import Screen from '../../../components/Screen';

const SignInScreen = ({ signIn, err }) => {
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
        <Header
          height={22.5}
          title={'Header title'}
          backButton={true}
          buttonSide={'left'}
        />
        {!!error && (
          <View style={styles.error}>
            <Text>{error}</Text>
          </View>
        )}

        <View style={styles.flex}>
          <Input
            placeholder="Email"
            containerStyle={styles.inputField}
            value={email}
            onChangeText={(text) => setEmail(text)}
            leftIcon={<Icon name="envelope" size={16} />}
          />

          <Input
            placeholder="Password"
            containerStyle={styles.inputField}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            leftIcon={<Icon name="key" size={16} />}
          />

          <Button
            title="Sign in"
            buttonStyle={styles.control}
            onPress={() => signIn(email, password)}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SignInScreen;
