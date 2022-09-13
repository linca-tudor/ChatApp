import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';
import OnboardingScreen from '../screen/OnboardingScreen';
import * as ExpoImagePicker from 'expo-image-picker';

const OnboardingScreenContainer = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [imagePath, setImagePath] = useState(null);
  const auth = getAuth();
  const { goBack } = useNavigation();

  const updateDisplayName = async (name) => {
    if (name === '') {
      setError(Strings.onboarding.emptyNameErr);
      return;
    }
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      goBack();
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const pickGalleryImage = async () => {
    const permissionResult =
      await ExpoImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert(Strings.onboarding.refusedGalleryPersmission);
      return;
    }

    const result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: false,
      aspect: [1, 1],
      quality: 1,
      selectionLimit: 1,
    });

    if (!result.cancelled) {
      setImagePath(result.uri);
      // console.log(result);
      console.log(imagePath);
    }
  };

  const pickCameraImage = async () => {
    const permissionResult =
      await ExpoImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert(Strings.onboarding.refusedCameraPermission);
      return;
    }

    const result = await ExpoImagePicker.launchCameraAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: false,
      aspect: [1, 1],
      quality: 1,
      selectionLimit: 1,
    });

    if (!result.cancelled) {
      setImagePath(result.uri);
      console.log(imagePath);
    }
  };

  return (
    <OnboardingScreen
      onSavePress={() => updateDisplayName(name)}
      onPickImagePress={() => pickGalleryImage()}
      onOpenCameraPress={() => pickCameraImage()}
      onTextUpdate={(name) => setName(name)}
      err={error}
      txt={name}
      image={imagePath}
    />
  );
};

export default OnboardingScreenContainer;
