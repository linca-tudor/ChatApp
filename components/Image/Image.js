import React from "react";
import { Image as RNImage } from "react-native";
import getStyles from "./Image.styles";

const Image = ({ width, height, size, style, source }) => {
  const styles = getStyles(size, width, height);
  return <RNImage source={source} style={[styles.image, style]} />;
};

export default Image;
