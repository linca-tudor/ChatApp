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
    button: {
      marginTop: 10,
    },
  });
};

export default getStyles;
