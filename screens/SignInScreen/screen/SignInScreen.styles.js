import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Colors from '../../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      paddingHorizontal: 20,
      backgroundColor: Colors.lavenderMist,
    },
    control: {
      marginTop: 10,
      backgroundColor: Colors.watermelon,
    },
    inputField: {
      marginTop: 10,
      backgroundColor: Colors.lavenderMist,
    },
    error: {
      marginTop: 10,
      padding: 10,
      color: '#fff',
      backgroundColor: '#D54826FF',
    },
  });
};

export default getStyles;
