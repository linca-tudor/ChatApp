import React from "react";
import { StyleSheet } from "react-native";

const getStyles = () => {
  return StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
      },
    controls: {
      flex: 1,
    },

    control: {
      marginTop: 10,
    },

    error: {
      marginTop: 10,
      padding: 10,
      color: "#fff",
      backgroundColor: "#D54826FF",
    },
  });
};

export default getStyles;
