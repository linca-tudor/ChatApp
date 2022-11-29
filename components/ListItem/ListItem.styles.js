import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      marginRight: 'auto',
      height: 70,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottomColor: Colors.pastelGrey,
      borderBottomWidth: 1,
    },
    text: {
      flexGrow: 1,
      fontSize: 16,
      marginLeft: 7.5,
    },
    flex: {
      flex: 1,
    },
  });
};

export default getStyles;
