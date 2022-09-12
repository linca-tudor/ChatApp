import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Screen from '../../../components/Screen';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import UserForm from '../../../components/UserForm';
import getStyles from './OnboardingScreen.styles';

const OnboardingScreen = ({ onButtonPress, err }) => {
  const [name, setName] = useState('');
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
        <View style={styles.container}>
          <Text>Aici va veni screen de upload poze</Text>
        </View>
        <UserForm
          title={Strings.onboarding.title}
          subTitle={Strings.onboarding.subTitle}
          email={name}
          isEmailInputShown
          onEmailUpdate={(text) => setName(text)}
          isRecoverPassHidden={true}
          onButtonPress={() => onButtonPress(name)}
          buttonTitle={Strings.onboarding.buttonTitle}
          firstFieldTitle={Strings.general.yourName}
        />
      </View>
    </Screen>
  );
};

export default OnboardingScreen;
