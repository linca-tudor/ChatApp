import React, { useState } from 'react';
import SignInScreen from '../screen';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import Strings from '../../../assets/Strings';

const SignInScreenContainer = () => {
  const [error, setError] = useState();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const auth = getAuth();

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

  const recoverPassword = async (email) => {
    if (email === '') {
      setError(Strings.signIn.passEmptyEmailErr);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SignInScreen
      signIn={signIn}
      recoverPassword={recoverPassword}
      err={error}
      passwordHidden={passwordHidden}
      passwordHiddenToggle={onSecureTextTogle}
    />
  );
};

export default SignInScreenContainer;
