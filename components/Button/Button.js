import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import getStyles from './Button.styles';

const Button = ({ onPress, title, style, textStyle }) => {
  const styles = getStyles();

  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      <Text style={[textStyle, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
