import React, { useState } from 'react';
import SignUpScreen from '../screen';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Strings from '../../../assets/Strings';
import Routes from '../../../assets/Routes';
import { useNavigation } from '@react-navigation/native';

const SignUpScreenContainer = ({ navigation }) => {
  const [error, setError] = useState();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const auth = getAuth();
  const { navigate } = useNavigation();

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
      onBottomLinkPress={() => navigate(Routes.signIn)}
    />
  );
};

export default SignUpScreenContainer;
