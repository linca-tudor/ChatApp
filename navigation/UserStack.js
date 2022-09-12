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
    if (true && !displayName && !photoURL) { // TODO: remove true when development is done
      console.log('displayName is: ', displayName, '\n');
      console.log('photoURL is: ', photoURL, '\n', '\n');
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
      <Stack.Screen name="UserDrawer" component={UserDrawer} />
      <Stack.Screen name="Onboarding" component={OnboardingScreenContainer} />
    </Stack.Navigator>
  );
};

export default UserStack;
