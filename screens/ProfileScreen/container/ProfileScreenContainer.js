import React from 'react';
import ProfileScreen from '../screen';
import useAuthentication from '../../../utils/hooks';
import { AuthCredential, getAuth, signOut } from 'firebase/auth';

const ProfileScreenContainer = () => {
  const { user } = useAuthentication();
  const auth = getAuth();
  const onSignOutPress = () => {
    signOut(auth);
  };

  const { uid, displayName, email, photoURL } = user;

  

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
