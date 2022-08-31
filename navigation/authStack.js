import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreenContainer from "../screens/WelcomeScreen";
import SignInScreenContainer from "../screens/SignInScreen";
import SignOutScreenContainer from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{ headerShown: true, headerMode: 'float', headerBackTitleVisible: true, headerTitle: '' }}>
        <Stack.Screen name="Welcome" component={WelcomeScreenContainer} />
        <Stack.Screen name="Sign In" component={SignInScreenContainer} />
        <Stack.Screen name="Sign Up" component={SignOutScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
