import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Screen from '../../../components/Screen';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import UserForm from '../../../components/UserForm';
import getStyles from './OnboardingScreen.styles';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const OnboardingScreen = ({ onButtonPress, onTextUpdate, err, txt }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const styles = getStyles();

  useEffect(() => {
    setError(err);
    setText(txt);
  }, [err, txt]);

  return (
    <Screen backgroundColor={Colors.lavenderMist}>
      <View style={[styles.flex, styles.container]}>
        {!!error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        {/* <View>
          <Button
            onPress={() => {
              console.log('Profile pic saved...\n');
            }}
            title={Strings.general.upload}
            style={styles.saveButton}
          />
        </View> */}
        <View>
          <TextInput
            placeholder={Strings.general.yourName}
            secureText={false}
            value={text}
            onTextUpdate={(text) => {
              onTextUpdate(text);
            }}
          />

          <Button
            onPress={onButtonPress}
            title={Strings.general.save}
            style={styles.saveButton}
          />
        </View>
      </View>
    </Screen>
  );
};

export default OnboardingScreen;
