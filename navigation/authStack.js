import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreenContainer from '../screens/WelcomeScreen';
import SignInScreenContainer from '../screens/SignInScreen';
import SignUpScreenContainer from '../screens/SignUpScreen';
import RecoverPasswordContainer from '../screens/RecoverPassword';

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
      <Stack.Screen name="Welcome" component={WelcomeScreenContainer} />
      <Stack.Screen name="SignIn" component={SignInScreenContainer} />
      <Stack.Screen name="SignUp" component={SignUpScreenContainer} />
      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPasswordContainer}
      />
    </Stack.Navigator>
  );
}
