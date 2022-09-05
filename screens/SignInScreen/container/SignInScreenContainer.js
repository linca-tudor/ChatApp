import React, { useState } from 'react';
import SignInScreen from '../screen';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignInScreenContainer = () => {
  const [error, setError] = useState();
  const auth = getAuth();

  const signIn = async (email, password) => {
    if (email === '' || password === '') {
      setError('Please input both e-mail address and password');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return <SignInScreen signIn={signIn} err={error} />;
};

export default SignInScreenContainer;

