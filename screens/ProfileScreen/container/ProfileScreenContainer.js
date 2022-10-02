import React, { useEffect, useState } from 'react';
import ProfileScreen from '../screen';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import Routes from '../../../assets/Routes';

const ProfileScreenContainer = () => {
  const auth = getAuth();
  const navigation = useNavigation();
  const { navigate, openDrawer } = navigation;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [displayName, setdisplayName] = useState(auth.currentUser.displayName);
  const [photoURL, setPhotoUrl] = useState(auth.currentUser.photoURL);

  const { uid, email } = auth.currentUser;

  const onSignOutPress = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setdisplayName(auth.currentUser.displayName);
      setPhotoUrl(auth.currentUser.photoURL);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'state',
      () => {
        const drawerState =
          getDrawerStatusFromState(navigation.getState()) === 'open';
        setIsDrawerOpen(drawerState);
        console.log('drawerState is: ', drawerState);
        console.log('isDrawerOpen is: ', isDrawerOpen);
      },
      [isDrawerOpen]
    );

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!displayName && !photoURL) {
      navigate(Routes.onboarding);
    }
  }, [displayName, photoURL]);

  return (
    <ProfileScreen
      onSignOutPress={onSignOutPress}
      onDrawerButtonPress={() => {
        setIsDrawerOpen(true);
        openDrawer();
      }}
      onProfileEditPress={() => navigate(Routes.onboarding)}
      uid={uid}
      name={displayName}
      email={email}
      photoURL={photoURL}
      drawerState={isDrawerOpen}
    />
  );
};

export default ProfileScreenContainer;
