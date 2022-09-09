import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    header: {
      backgroundColor: Colors.lavenderMist,
    },
    drawer: {
      backgroundColor: Colors.lavenderMist,
    },
    drawerLabel: {
      marginLeft: 5,
      color: Colors.black,
      fontSize: 16,
      fontWeight: '500',
    },
  });
};

export default getStyles;
