import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import WelcomeScreenContainer from "../screens/WelcomeScreen";
import SignInScreenContainer from "../screens/SignInScreen";
import SignUpScreenContainer from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerMode: "float",
          headerBackTitleVisible: true,
          headerTitle: "",
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreenContainer} />
        <Stack.Screen name="Sign In" component={SignInScreenContainer} />
        <Stack.Screen name="Sign Up" component={SignUpScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
