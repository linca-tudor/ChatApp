import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import RecoverPassword from '../screen/RecoverPassword';
import { useNavigation } from '@react-navigation/native';
import Strings from '../../../assets/Strings';
import Routes from '../../../assets/Routes';

const RecoverPasswordContainer = () => {
  const [error, setError] = useState();
  const auth = getAuth();
  const { navigate } = useNavigation();

  const recoverPassword = async (email) => {
    if (email === '') {
      setError(Strings.recoverPassword.emptyEmailErr);
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError('');
      navigate(Routes.signIn);
    } catch (error) {
      setError(error.message);
    }
  };

  return <RecoverPassword onButtonPress={recoverPassword} err={error} />;
};

export default RecoverPasswordContainer;
