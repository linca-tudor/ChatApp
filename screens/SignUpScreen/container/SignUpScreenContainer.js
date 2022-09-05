import React, { useState } from 'react';
import SignUpScreen from '../screen';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreenContainer = ({ navigation }) => {
  const [error, setError] = useState();
  const auth = getAuth();

  async function signUp(email, password) {
    if (email === '' || password === '') {
      setError('Please input both e-mail address and password');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError('');
      navigation.navigate('Sign In');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  return <SignUpScreen signUp={signUp} err={error} />;
};

export default SignUpScreenContainer;
