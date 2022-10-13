import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../assets/Colors';

const getStyles = () => {
  const HEIGHT = Dimensions.get('screen').height;
  const WIDTH = Dimensions.get('screen').width;

  return StyleSheet.create({
    modalContainer: {
      height: HEIGHT,
      width: WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 75,
      position: 'absolute',
      backgroundColor: Colors.darkGrey3F,
    },
    modalView: {
      width: '100%',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 25,
      alignItems: 'center',
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      width: '100%',
      height: 50,
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      backgroundColor: Colors.watermelon,
    },
    iconStyle: {
      marginRight: 10,
    },
    textStyle: {
      width: 125,
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
};

export default getStyles;
