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
      width: '100%',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
    },
    messageSubtitle: {
      width: '100%',
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
      width: 135,
      fontSize: 16,
    },
    button: {
      marginTop: 10,
    },
  });
};

export default getStyles;
