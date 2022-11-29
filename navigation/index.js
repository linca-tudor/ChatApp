import React from 'react';
import { View, Text } from 'react-native';
import useAuthentication from './../utils/hooks';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import LoadingScreen from '../screens/LoadingScreen';

const RootNavigation = () => {
  const { user, loading } = useAuthentication();

  if (loading) {
    return <LoadingScreen />;
  }

  return user ? <UserStack /> : <AuthStack />;
};

export default RootNavigation;
