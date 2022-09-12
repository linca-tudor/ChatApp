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
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
    },
    messageSubtitle: {
      fontSize: 18,
      textAlign: 'center',
    },
    textInputContainer: {
      marginBottom: 10,
    },
    textInput: {
      marginBottom: 10,
    },
    recoverPasswordContainer: {
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    recoverPasswordText: {
      fontSize: 16,
    },
    button: {
      marginTop: 10,
    },
  });
};

export default getStyles;
