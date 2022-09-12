import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import EnterDisplayName from '../screen/EnterUserProfileData';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';
import Routes from '../../../assets/Routes';

const EnterUserProfileDataContainer = () => {
  const [error, setError] = useState();
  const auth = getAuth();
  const { navigate } = useNavigation();

  const updateDisplayName = async (name) => {
    if (name === '') {
      setError(Strings.recoverPassword.emptyEmailErr);
      return;
    }
    try {
      await auth.currentUser.updateProfile(auth, email);
      setError('');
      navigate(Routes.signIn);
    } catch (error) {
      setError(error.message);
    }
  };



  return <EnterDisplayName onButtonPress={null} err={error} />;
};

export default EnterUserProfileDataContainer;
