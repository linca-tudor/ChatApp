import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import EnterDisplayName from '../screen/OnboardingScreen';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';

const OnboardingScreenContainer = () => {
  const [error, setError] = useState();
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

  return <EnterDisplayName onButtonPress={updateDisplayName} err={error} />;
};

export default OnboardingScreenContainer;
