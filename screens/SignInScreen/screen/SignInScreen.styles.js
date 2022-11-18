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
      flexGrow: 1,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    notRegisteredText: {
      width: 140,
      marginTop: 'auto',
      fontSize: 16,
      marginRight: 5,
    },
    notRegisteredRoute: {
      width: 101,
      marginTop: 'auto',
      fontSize: 16,
      fontWeight: '600',
      color: Colors.ultramarineBlue,
    },
  });
};

export default getStyles;
