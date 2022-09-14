import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';
import OnboardingScreen from '../screen/OnboardingScreen';
import { pickCameraImage } from './utils/pickImage';
import { pickGalleryImage } from './utils/pickImage';
import getBlobFromUri from './utils/getBlobFromURI';
import fileUpload from './utils/fileUpload';
import { uuidv4 } from '@firebase/util';

const OnboardingScreenContainer = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [imageURI, setImageURI] = useState(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [remoteURL, setRemoteURL] = React.useState('');
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

  const onStart = () => {
    setIsUploading(true);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };
  const onComplete = (fileUrl) => {
    setRemoteURL(fileUrl);
    setIsUploading(false);
    setImageURI(null);
  };

  const onFail = (error) => {
    setError(error);
    setIsUploading(false);
  };
  const handleFileUpload = async () => {
    if (!imageURI) {
      setError('Please pick a picture!');
      return;
    }

    const blob = await getBlobFromUri(imageURI);

    fileUpload(
      blob,
      { onStart, onProgress, onComplete, onFail },
      uuidv4()
    );
  };

  return (
    <OnboardingScreen
      onSavePress={() => updateDisplayName(name)}
      onPickImagePress={() => pickGalleryImage(setImageURI)}
      onOpenCameraPress={() => pickCameraImage(setImageURI)}
      onUploadPress={() => handleFileUpload()}
      onTextUpdate={(name) => setName(name)}
      err={error}
      txt={name}
      image={imageURI}
    />
  );
};

export default OnboardingScreenContainer;
