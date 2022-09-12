import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Screen from '../../../components/Screen';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import UserForm from '../../../components/UserForm';
import getStyles from './RecoverPassword.styles';

const RecoverPassword = ({ onButtonPress, err }) => {
  const [email, setEmail] = useState('');
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
          title={Strings.recoverPassword.title}
          subTitle={Strings.recoverPassword.subTitle}
          email={email}
          isEmailInputShown
          onEmailUpdate={(text) => setEmail(text)}
          isRecoverPassHidden={true}
          onButtonPress={() => onButtonPress(email)}
          buttonTitle={Strings.recoverPassword.buttonTitle}
          firstFieldTitle={Strings.general.email}
        />
      </View>
    </Screen>
  );
};

export default RecoverPassword;
