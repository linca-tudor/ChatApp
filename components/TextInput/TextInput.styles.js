import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';

const getStyles = ({ icon }) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 65,
      borderRadius: 12.5,
      padding: 20,
      backgroundColor: Colors.white,
    },
    icon: {
      opacity: 0.5,
    },
    text: {
      flexGrow: 1,
      fontSize: 18,
      marginRight: 10,
      fontWeight: '400',
    },
  });
};

export default getStyles;
