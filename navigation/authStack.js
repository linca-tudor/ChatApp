import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreenContainer from '../screens/WelcomeScreen';
import SignInScreenContainer from '../screens/SignInScreen';
import SignUpScreenContainer from '../screens/SignUpScreen';
import RecoverPasswordContainer from '../screens/RecoverPassword/';
import EnterDisplayNameContainer from '../screens/EnterUserProfileData';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="EnterUserProfileData"
          component={EnterDisplayNameContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
