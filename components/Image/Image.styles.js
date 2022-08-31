import { StyleSheet } from "react-native";

const getStyles = (size, height, width) => {
  let usedHeight = height;
  let usedWidth = width;
  if (size) {
    usedHeight = size;
    usedWidth = size;
  }
  return StyleSheet.create({
    image: {
      height: usedHeight,
      width: usedWidth,
    },
  });
};

export default getStyles;
