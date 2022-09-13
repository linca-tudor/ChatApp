import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Screen from '../../../components/Screen';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import getStyles from './OnboardingScreen.styles';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const OnboardingScreen = ({
  onSavePress,
  onPickImagePress,
  onOpenCameraPress,
  onTextUpdate,
  err,
  txt,
  image,
}) => {
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
        <View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <Button
            onPress={onPickImagePress}
            title={Strings.general.openGallery}
            style={styles.saveButton}
          />
          <Button
            onPress={onOpenCameraPress}
            title={Strings.general.takePhoto}
            style={styles.saveButton}
          />
        </View>
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
            onPress={onSavePress}
            title={Strings.general.save}
            style={styles.saveButton}
          />
        </View>
      </View>
    </Screen>
  );
};

export default OnboardingScreen;
