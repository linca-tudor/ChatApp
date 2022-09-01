import React from "react";
import { Text, View, SafeAreaView, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import Image from "../../../components/Image";
import getStyles from "./WelcomeScreen.styles";
import Strings from "../../../assets/Strings";

const SCREEN_WIDTH = Dimensions.get("screen").width;

const WelcomeScreen = ({ imageSource, onSignInPress, onSignUpPress }) => {
  styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={imageSource}
        style={styles.welcomeImage}
        size={SCREEN_WIDTH * 0.9}
      />
      <Text style={styles.title}>{Strings.welcome.title}</Text>
      <Text style={styles.subTitle}>{Strings.welcome.subTitle}</Text>
      <View style={styles.buttons}>
        <Button
          title="Sign in"
          buttonStyle={styles.button}
          onPress={onSignInPress}
        />
        <Button
          title="Sign up"
          type="outline"
          buttonStyle={styles.button}
          onPress={onSignUpPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
