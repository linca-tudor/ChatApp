import React, { useState } from 'react';
import SignUpScreen from '../screen';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Strings from '../../../assets/Strings';

const SignUpScreenContainer = ({ navigation }) => {
  const [error, setError] = useState();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const auth = getAuth();

  const onSecureTextTogle = () => {
    setPasswordHidden(!passwordHidden);
  };

  async function signUp(email, password) {
    if (email === '' || password === '') {
      setError(Strings.signUp.emptyEmailPassErr);
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

  return (
    <SignUpScreen
      signUp={signUp}
      err={error}
      passwordHidden={passwordHidden}
      passwordHiddenToggle={onSecureTextTogle}
    />
  );
};

export default SignUpScreenContainer;
