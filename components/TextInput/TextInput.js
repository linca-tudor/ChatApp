import React from 'react';
import { TouchableOpacity, View, TextInput as RNTextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import getStyles from './TextInput.styles';
import Colors from '../../assets/Colors';

const TextInput = ({
  placeholder,
  secureText,
  isSecureTextHidden,
  onSecureTextToggle,
  value,
  onTextUpdate,
  style,
}) => {
  const styles = getStyles('');

  return (
    <View style={[style, styles.container]}>
      <RNTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onTextUpdate(text)}
        secureTextEntry={secureText && isSecureTextHidden}
        style={styles.text}
      />
      {secureText && (
        <TouchableOpacity onPress={onSecureTextToggle}>
          <Ionicons
            name={isSecureTextHidden ? 'eye-outline' : 'eye-off-outline'}
            size={28}
            color={Colors.black}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;
