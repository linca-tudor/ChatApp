import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreenContainer from '../screens/ChatScreen';
import ProfileScreenContainer from '../screens/ProfileScreen';
import getStyles from './UserDrawer.styles';
import Colors from '../assets/Colors';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();
const SCREEN_WIDTH = Dimensions.get('screen').width;

const UserDrawer = () => {
  const styles = getStyles();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
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
  );
};

export default UserDrawer;
