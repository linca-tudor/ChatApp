import React from 'react';
import { View } from 'react-native';
import getStyles from './Screen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = ({ backgroundColor, children, style }) => {
  const styles = getStyles(backgroundColor);
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

export default Screen;
