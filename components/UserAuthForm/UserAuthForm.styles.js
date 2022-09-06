import React from 'react';
import { StyleSheet } from 'react-native';

const getStyles = () => {
  return StyleSheet.create({
    message: {
      paddingHorizontal: 20,
      alignItems: 'center',
      marginVertical: 60,
    },
    messageTitle: {
      fontSize: 26,
      textAlign: 'center',
      marginBottom: 20,
    },
    messageSubtitle: {
      fontSize: 18,
      textAlign: 'center',
    },
  });
};

export default getStyles;
