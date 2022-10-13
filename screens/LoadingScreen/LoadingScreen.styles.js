import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.lavenderMist,
    },
    animation: {
      width: 100,
      height: 100,
    },
  });
};

export default getStyles;
