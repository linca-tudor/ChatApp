import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Screen from '../../../components/Screen';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import UserAuthForm from '../../../components/UserAuthForm';
import getStyles from './EnterUserProfileData.styles';

const EnterUserProfileData = ({ onButtonPress, err }) => {
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
        <UserAuthForm
          title={Strings.enterUserDisplayName.title}
          subTitle={Strings.enterUserDisplayName.subTitle}
          email={name}
          isEmailInputShown
          onEmailUpdate={(text) => setName(text)}
          isRecoverPassHidden={true}
          onButtonPress={() => onButtonPress(name)}
          buttonTitle={Strings.enterUserDisplayName.buttonTitle}
        />
      </View>
    </Screen>
  );
};

export default EnterUserProfileData;
