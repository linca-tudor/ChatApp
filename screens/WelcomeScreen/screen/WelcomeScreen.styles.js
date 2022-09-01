import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import Colors from "../../../assets/Colors";

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
      backgroundColor: Colors.background,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    title: {
      flex: 0.1,
      width: "100%",
      fontSize: 24,
      textAlign: 'center',
      textAlignVertical: 'center',
      // backgroundColor: "green",
    },
    subTitle: {
      flex: 0.1,
      width: "100%",
      fontSize: 16,
      textAlign: 'center',
      textAlignVertical: 'center',
      // backgroundColor: "red",
    },
    buttons: {
      flex: 0.1,
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'center',
      // backgroundColor: "magenta",
      borderRadius: 5,
    },
    button: {
      flex: 1,
      borderWidth: 1.5,
      // backgroundColor: "purple",
      // width: '50%',
    },
    welcomeImage: {
      width: "100%",
      flex: 0.5,
      borderRadius: 25,
    },
  });
};

export default getStyles;
