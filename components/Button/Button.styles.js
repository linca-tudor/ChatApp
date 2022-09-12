import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    button: {
      backgroundColor: Colors.watermelon,
      padding: 5,
      borderRadius: 12.5,
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: Colors.white,
    },
  });
};

export default getStyles;