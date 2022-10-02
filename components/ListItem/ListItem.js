import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import getStyles from './ListItem.styles';

const ListItem = ({ icon, text }) => {
  const styles = getStyles();
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
