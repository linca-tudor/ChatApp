import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

const getStyles = (backgroundColor) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingTop: 7.5,
    },
  });
};

export default getStyles;
