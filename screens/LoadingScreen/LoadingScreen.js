import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import getStyles from './LoadingScreen.styles';

const LoadingScreen = () => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./../../assets/images/LoadingAnimation_Lottie.json')}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
};

export default LoadingScreen;
