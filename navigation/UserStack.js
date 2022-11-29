import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreenContainer from '../screens/OnboardingScreen';
import UserDrawer from './UserDrawer';
import { getAuth } from 'firebase/auth';
import Routes from '../assets/Routes';
import { useNavigation } from '@react-navigation/native';

const UserStack = () => {
  const Stack = createStackNavigator();
  const auth = getAuth();
  const { navigate } = useNavigation();
  const { displayName, photoURL } = auth.currentUser;

  useEffect(() => {
    if (!displayName && !photoURL) {
      navigate(Routes.onboarding);
    }
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={Routes.userDrawer}
      screenOptions={{
        headerShown: false,
        headerMode: 'float',
        headerBackTitleVisible: true,
        headerTitle: '',
      }}
    >
      <Stack.Screen name={Routes.userDrawer} component={UserDrawer} />
      <Stack.Screen
        name={Routes.onboarding}
        component={OnboardingScreenContainer}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
