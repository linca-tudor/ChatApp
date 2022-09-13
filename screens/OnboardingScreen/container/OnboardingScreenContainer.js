import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';
import OnboardingScreen from '../screen/OnboardingScreen';

const OnboardingScreenContainer = () => {
  const [error, setError] = useState();
  const [name, setName] = useState();
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

  return (
    <OnboardingScreen
      onButtonPress={() => updateDisplayName(name)}
      onTextUpdate={(name) => setName(name)}
      err={error}
      txt={name}
    />
  );
};

export default OnboardingScreenContainer;
