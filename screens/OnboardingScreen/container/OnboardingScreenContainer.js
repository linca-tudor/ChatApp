import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';
import OnboardingScreen from '../screen/OnboardingScreen';
import {
  pickCameraImage,
  pickGalleryImage,
} from '../../../utils/helpers/pickImage';
import Routes from '../../../assets/Routes';
import { StringFormat } from 'firebase/storage';

const OnboardingScreenContainer = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [fileURL, setFileURL] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [changeProfilePic, setChangeProfilePic] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();
  const { navigate, goBack } = navigation;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(auth.currentUser.displayName);
      setPhotoURL(auth.currentUser.photoURL);
    });

    return unsubscribe;
  }, [navigation]);

  const updateUserInfo = async (name) => {
    if (!name) {
      Alert.alert(
        Strings.onboarding.emptyNameAlertTitle,
        Strings.onboarding.emptyNameAlertSubtitle,
        [
          {
            text: Strings.onboarding.setName,
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: Strings.onboarding.useEmail,
            onPress: async () => {
              const email = auth.currentUser.email;
              const extractedName = email.substring(0, email.lastIndexOf('@'));
              setName(extractedName);
              await updateDisplayName(extractedName);
              setTimeout(() => {
                goBack();
              }, 500);
            },
          },
        ]
      );
    } else {
      await updateDisplayName(name);
      if (changeProfilePic) await updateProfilePicture(fileURL);
      goBack();
    }
  };

  const updateDisplayName = async (name) => {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const updateProfilePicture = async (avatar) => {
    try {
      await updateProfile(auth.currentUser, { photoURL: avatar });
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const onStart = (localURI, uuid) => {
    setIsUploading(true);
    setIsModalVisible(false);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onComplete = (fileUrl, uuid) => {
    setFileURL(fileUrl);
    setIsUploading(false);
    setChangeProfilePic(true);
  };

  const onFail = (error) => {
    if (error == 'storage/retry-limit-exceeded') setError(error);
    setIsUploading(false);
    setChangeProfilePic(false);
  };

  return (
    <OnboardingScreen
      onSavePress={() => updateUserInfo(name)}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onCancelPress={() => {
        goBack();
      }}
      onPickImagePress={() =>
        pickGalleryImage(
          {
            onStart,
            onProgress,
            onComplete,
            onFail,
          },
          'profilePic'
        )
      }
      onOpenCameraPress={() =>
        pickCameraImage(
          {
            onStart,
            onProgress,
            onComplete,
            onFail,
          },
          'profilePic'
        )
      }
      onTextUpdate={(name) => setName(name)}
      err={error}
      txt={name}
      photoURL={auth.currentUser.photoURL}
    />
  );
};

export default OnboardingScreenContainer;
