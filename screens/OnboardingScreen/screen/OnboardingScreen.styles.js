import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      paddingHorizontal: 20,
      backgroundColor: Colors.lavenderMist,
    },
    imageContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    editIconContainer: {
      height: 45,
      width: 45,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      marginTop: 140,
      borderRadius: 22.5,
      backgroundColor: Colors.titanWhite,
      shadowColor: Colors.black,
      shadowOffset: {
        height: 1,
      },
      shadowOpacity: 0.5,
    },
    image: {
      width: 160,
      height: 160,
      borderRadius: 80,    },
    frame: {
      marginTop: -167.5,
      width: 175,
      height: 175,
      borderRadius: 175 / 2,
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: Colors.watermelon,
    },
    welcomeMessageContainer: {
      marginTop: 55,
      alignItems: 'center',
    },
    welcomeMessage: {
      width: '100%',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '500',
      color: Colors.darkGrey,
      opacity: 0.9,
    },
    textInput: {
      marginTop: 40,
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
    saveButton: {
      marginTop: 10,
    },
    cancelButton: {
      marginTop: 10,
    },
    skipButton: {},
    skipButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.ultramarineBlue,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 75,
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
