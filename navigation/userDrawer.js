import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreenContainer from '../screens/ChatScreen';
import ProfileScreenContainer from '../screens/ProfileScreen';
import getStyles from './UserDrawer.styles';
import Colors from '../assets/Colors';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const SCREEN_WIDTH = Dimensions.get('window').width;

const UserDrawer = () => {
  const styles = getStyles();
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: SCREEN_WIDTH >= 758 ? 'permanent' : 'slide',
        drawerStyle: styles.drawer,
        headerStyle: styles.header,
        drawerActiveBackgroundColor: Colors.periwinkle,
        drawerLabelStyle: styles.drawerLabel,
      }}
    >
      <Drawer.Screen
        name="Chat"
        component={ChatScreenContainer}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            >
              <Feather
                name="menu"
                size={30}
                color="black"
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreenContainer} />
    </Drawer.Navigator>
  );
};

export default UserDrawer;
