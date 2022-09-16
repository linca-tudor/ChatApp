import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';
import OnboardingScreen from '../screen/OnboardingScreen';
import {
  pickCameraImage,
  pickGalleryImage,
} from '../../../utils/helpers/pickImage';

const OnboardingScreenContainer = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [isUploading, setIsUploading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
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
    updateProfile(auth.currentUser, { photoURL: fileUrl }).then(() => {
      setIsUploading(false);
    });
  };

  const onFail = (error) => {
    console.log(('File Upload Error is: ', error));
    setError(error);
    setIsUploading(false);
  };

  return (
    <OnboardingScreen
      onSavePress={() => updateDisplayName(name)}
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
      image={auth.currentUser.photoURL}
    />
  );
};

export default OnboardingScreenContainer;
