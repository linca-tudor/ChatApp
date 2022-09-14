import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: Colors.lavenderMist,
    },
    error: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      // marginBottom: 'auto',
      padding: 10,
      backgroundColor: Colors.ferrariRed,
      borderRadius: 12.5,
    },
    errorText: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 15,
    },
    saveButton: {
      marginTop: 10,
    },
    skipButton: {},
    skipButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.ultramarineBlue,
    },
  });
};

export default getStyles;
