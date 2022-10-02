import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../../assets/Colors';

const getStyles = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: Colors.lavenderMist,
    },
    drawerButton: {
      alignSelf: 'flex-start',
      position: 'absolute',
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      marginLeft: 20,
    },
    button: {
      marginTop: 'auto',
      marginBottom: 100,
    },
    imageContainer: {
      marginTop: 100,
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
      borderRadius: 80,
      alignSelf: 'center',
    },
    frame: {
      marginTop: -167.5,
      width: 175,
      height: 175,
      borderRadius: 175 / 2,
      alignSelf: 'center',
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: Colors.watermelon,
    },
    textContainer: {
      alignItems: 'center',
      marginTop: 30,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 7.5,
    },
    email: {
      fontSize: 16,
      color: Colors.darkGrey,
    },
    listContainer: {
      paddingHorizontal: 20,
      width: '100%',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  });
};

export default getStyles;
