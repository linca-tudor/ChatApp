import React, { useEffect } from 'react';
import ProfileScreen from '../screen';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../assets/Routes';

const ProfileScreenContainer = () => {
  const auth = getAuth();
  const { navigate } = useNavigation();
  const onSignOutPress = () => {
    // signOut(auth); 
    navigate(Routes.onboarding) // TODO: Remove after dev
  };

  useEffect(() => {
    if (!displayName && !photoURL) {
      navigate(Routes.onboarding);
    }
  }, []);

  const { uid, email, displayName, photoURL } = auth.currentUser;

  return (
    <ProfileScreen
      onSignOutPress={onSignOutPress}
      uid={uid}
      name={displayName}
      email={email}
      photoURL={photoURL}
    />
  );
};

export default ProfileScreenContainer;
