import React, { useState } from 'react';
import SignInScreen from '../screen';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Strings from '../../../assets/Strings';
import { useNavigation } from '@react-navigation/native';

const SignInScreenContainer = () => {
  const [error, setError] = useState();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const auth = getAuth();
  const { navigate } = useNavigation();

  const onSecureTextTogle = () => {
    setPasswordHidden(!passwordHidden);
  };

  const signIn = async (email, password) => {
    if (email === '' || password === '') {
      setError(Strings.signIn.emptyEmailPassErr);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SignInScreen
      signIn={signIn}
      recoverPassword={() => navigate('Recover Password')}
      err={error}
      passwordHidden={passwordHidden}
      passwordHiddenToggle={onSecureTextTogle}
      onBottomLinkPress={() => navigate('Sign Up')}
    />
  );
};

export default SignInScreenContainer;
