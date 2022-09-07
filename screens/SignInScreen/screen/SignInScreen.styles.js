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
    error: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      padding: 10,
      backgroundColor: Colors.ferrariRed,
      borderRadius: 12.5,
    },
    errorText: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 15,
    },
    notRegisteredContainer: {
      marginTop: 'auto',
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    notRegisteredText: {
      fontSize: 16,
      marginRight: 5,
    },
    notRegisteredRoute: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.watermelon,
    },
  });
};

export default getStyles;
