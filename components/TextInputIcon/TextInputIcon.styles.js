import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';

const getStyles = ({ icon }) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 90,
      borderRadius: 12.5,
      paddingLeft: 5,
      paddingRight: 20,
      paddingVertical: 10,
      backgroundColor: Colors.white,
    },
    iconContainer: {
      height: '80%',
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: Colors.pastelGrey,
      borderRightWidth: 2,
    },
    crossIcon: {
      opacity: 0.5,
      alignSelf: 'center',
      marginLeft: 'auto',
    },
    textContainer: {
      maxWidth: '70%',
      height: '100%',
      paddingTop: 10,
      marginLeft: 15,
    },
    title: {
      flex: 1,
      fontSize: 13,
      color: Colors.darkGrey,
    },
    inputContainer: {
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      // flexGrow: 1,
      fontSize: 17,
      fontWeight: '400',
      paddingRight: 10,
    },
  });
};

export default getStyles;
