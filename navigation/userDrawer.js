import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreenContainer from '../screens/ChatScreen';
import ProfileScreenContainer from '../screens/ProfileScreen';
import getStyles from './userDrawer.styles';
import Colors from '../assets/Colors';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const SCREEN_WIDTH = Dimensions.get('screen').width

export default function UserDrawer() {
  const styles = getStyles();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          // drawerIcon: 
          drawerType: SCREEN_WIDTH >= 758 ? 'permanent' : 'slide',
          drawerStyle: styles.drawer,
          headerStyle: styles.header,
          drawerActiveBackgroundColor: Colors.periwinkle,
          drawerLabelStyle: styles.drawerLabel,
        }}
      >
        <Drawer.Screen name="Profile" component={ProfileScreenContainer} />
        <Drawer.Screen name="Chat" component={ChatScreenContainer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
