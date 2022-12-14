import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import Screen from '../../../components/Screen';
import Colors from '../../../assets/Colors';
import Strings from '../../../assets/Strings';
import getStyles from './OnboardingScreen.styles';
import MediaUploadModal from '../../../components/MediaUploadModal';
import Button from '../../../components/Button';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import TextInputIcon from '../../../components/TextInputIcon/TextInputIcon';

const OnboardingScreen = ({
  onSavePress,
  isModalVisible,
  setIsModalVisible,
  onCancelPress,
  onPickImagePress,
  onOpenCameraPress,
  onTextUpdate,
  err,
  txt,
  photoURL,
}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const styles = getStyles();
  const imageSource = photoURL
    ? { uri: photoURL }
    : require('../../../assets/images/userPhotoPlaceholder.jpeg');

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
        <MediaUploadModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onCameraPress={onOpenCameraPress}
          onGalleryPress={onPickImagePress}
        />
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(true);
            }}
          >
            <View style={[styles.imageContainer]}>
              <Image source={imageSource} style={styles.image} />
              <View style={styles.frame} />
              <View style={styles.editIconContainer}>
                <MaterialCommunityIcons
                  name="pencil"
                  size={32.5}
                  color={Colors.watermelon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessage}>
            {Strings.onboarding.welcomeMessage}
          </Text>
        </View>
        <View>
          <TextInputIcon
            placeholder={Strings.general.yourName}
            secureText={false}
            value={text}
            onTextUpdate={(text) => {
              onTextUpdate(text);
            }}
            onCrossPress={() => {
              onTextUpdate('');
            }}
            style={styles.textInput}
            text={text}
            title={Strings.onboarding.usernameTextInputTitle}
            icon={<AntDesign name="user" size={30} color={Colors.black} />}
          />

          <Button
            onPress={onSavePress}
            title={Strings.general.save}
            style={styles.saveButton}
          />
          <Button
            onPress={onCancelPress}
            title={Strings.general.cancel}
            style={styles.cancelButton}
          />
        </View>
      </View>
    </Screen>
  );
};

export default OnboardingScreen;
