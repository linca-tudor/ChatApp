import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreenContainer from '../screens/WelcomeScreen';
import SignInScreenContainer from '../screens/SignInScreen';
import SignUpScreenContainer from '../screens/SignUpScreen';
import RecoverPasswordContainer from '../screens/RecoverPassword/';

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
        <Stack.Screen name="Sign In" component={SignInScreenContainer} />
        <Stack.Screen name="Sign Up" component={SignUpScreenContainer} />
        <Stack.Screen
          name="Recover Password"
          component={RecoverPasswordContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
