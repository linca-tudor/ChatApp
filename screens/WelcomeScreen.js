import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Button } from "react-native-elements";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import Image from "../components/Image";

// const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/Welcome.png")}
        style={styles.welcomeImage}
        size={SCREEN_WIDTH * 0.9}
      />
      <Text>Come and chat away</Text>
      <Text>Come and chat away</Text>
      <View style={styles.buttons}>
        <Button
          title="Sign in"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Sign In")}
        />
        <Button
          title="Sign up"
          type="outline"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Sign Up")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    marginTop: 10,
    borderWidth: 1.5,
  },
  welcomeImage: {
    borderRadius: 25,
  },
});

export default WelcomeScreen;
