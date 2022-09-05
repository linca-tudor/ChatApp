import React from "react";
import { StyleSheet, StatusBar, Dimensions } from "react-native";
import Colors from "../../../assets/Colors";

const SCREEN_WIDTH = Dimensions.get("screen").width;

const getStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      paddingHorizontal: 10,
    },
    textContainer: {
      flex: 0.4,
      justifyContent: "center",
    },
    title: {
      fontSize: 28,
      textAlign: "center",
      textAlignVertical: "center",
      fontWeight: "bold",
      marginBottom: 7.5,
    },
    subTitle: {
      fontSize: 18,
      textAlign: "center",
      textAlignVertical: "center",
      marginTop: 7.5,
    },
    buttonContainer: {
      marginHorizontal: 20,
      flexDirection: "row",
      borderRadius: 10,
      height: 60,
    },
    button: {
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1.5,
      borderRadius: 15,
      borderColor: "white",
    },
    buttonText: {
      fontSize: 15,
      fontWeight: "800",
      letterSpacing: 1,
    },
    welcomeImage: {
      flex: 0.5,
      borderRadius: 30,
    },
  });
};

export default getStyles;
