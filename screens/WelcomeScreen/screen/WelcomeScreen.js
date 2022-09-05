import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Image from '../../../components/Image';
import getStyles from './WelcomeScreen.styles';
import Strings from '../../../assets/Strings';
import Colors from '../../../assets/Colors';
import Screen from '../../../components/Screen';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const WelcomeScreen = ({ imageSource, onSignInPress, onSignUpPress }) => {
  styles = getStyles();

  return (
    <Screen backgroundColor={Colors.lavenderMist} style={styles.container}>
      <Image
        source={imageSource}
        style={styles.welcomeImage}
        size={SCREEN_WIDTH * 0.9}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{Strings.welcome.title}</Text>
        <Text style={styles.subTitle}>{Strings.welcome.subTitle}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onSignUpPress}
          style={[
            styles.button,
            { marginRight: -25, backgroundColor: Colors.white, width: 150 },
          ]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSignInPress}
          style={[
            styles.button,
            { borderLeftWidth: 0, paddingLeft: 25, width: 160 },
          ]}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default WelcomeScreen;
