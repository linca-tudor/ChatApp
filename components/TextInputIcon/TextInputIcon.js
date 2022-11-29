import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import getStyles from './TextInputIcon.styles';
import Colors from '../../assets/Colors';

const TextInputIcon = ({
  placeholder,
  secureText,
  value,
  onTextUpdate,
  onCrossPress,
  style,
  icon,
  title,
  text,
}) => {
  const styles = getStyles('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setInputText(text);
  }, [text]);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <RNTextInput
            placeholder={placeholder}
            value={value}
            onChangeText={(txt) => {
              onTextUpdate(txt);
            }}
            secureTextEntry={secureText && isSecureTextHidden}
            style={styles.input}
          />
        </View>
      </View>
      {inputText && (
        <TouchableOpacity onPress={onCrossPress} style={styles.crossIcon}>
          <Entypo
            name="circle-with-cross"
            size={24}
            color={Colors.ultramarineBlue}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputIcon;
