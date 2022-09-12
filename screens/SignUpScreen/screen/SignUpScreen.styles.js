import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
      backgroundColor: Colors.lavenderMist,
    },
    inputField: {
      backgroundColor: Colors.lavenderMist,
    },
    error: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      padding: 10,
      color: Colors.white,
      backgroundColor: Colors.ferrariRed,
      borderRadius: 12.5,
    },
    errorText: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 15,
    },
    alreadyRegisteredContainer: {
      marginTop: 'auto',
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    alreadyRegisteredText: {
      fontSize: 16,
      marginRight: 5,
    },
    alreadyRegisteredRoute: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.ultramarineBlue,
    },
  });
};

export default getStyles;
