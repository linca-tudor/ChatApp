import { StyleSheet } from "react-native";

const getStyles = (headerHeight, buttonSide) => {
  return StyleSheet.create({
    header: {
      height: headerHeight,
    },
    backButtonText: {
      textAlign: "left",
      textAlignVertical: "top",
      fontSize: Platform.OS === "android" ? 17 : 18
    },
    backButtonIcon: {
      paddingTop: Platform.OS === "android" ? 2.75 : 1,
    },
    backButtonContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: buttonSide === "left" ? "flex-start" : "flex-end",
    },
  });
};

export default getStyles;
