import React from 'react';
import ProfileScreen from '../screen';
import { getAuth, signOut } from 'firebase/auth';
import EnterDisplayName from '../../EnterUserProfileData'
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../assets/Routes';

const ProfileScreenContainer = () => {
  const auth = getAuth();
  const { navigate } = useNavigation()
  const onSignOutPress = () => {
    signOut(auth);
  };

  const { uid, displayName, email, photoURL } = auth.currentUser;

  if (!!!displayName) {
    navigate(Routes.enterUserProfileData);
  }

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
