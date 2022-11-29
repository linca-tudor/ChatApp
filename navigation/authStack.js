import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreenContainer from '../screens/WelcomeScreen';
import SignInScreenContainer from '../screens/SignInScreen';
import SignUpScreenContainer from '../screens/SignUpScreen';
import RecoverPasswordContainer from '../screens/RecoverPassword';
import Routes from '../assets/Routes';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerMode: 'float',
        headerBackTitleVisible: true,
        headerTitle: '',
      }}
    >
      <Stack.Screen name={Routes.welcome} component={WelcomeScreenContainer} />
      <Stack.Screen name={Routes.signIn} component={SignInScreenContainer} />
      <Stack.Screen name={Routes.signUp} component={SignUpScreenContainer} />
      <Stack.Screen
        name={Routes.recoverPassword}
        component={RecoverPasswordContainer}
      />
    </Stack.Navigator>
  );
}
