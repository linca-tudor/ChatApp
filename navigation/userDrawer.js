import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreenContainer from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function UserDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreenContainer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
