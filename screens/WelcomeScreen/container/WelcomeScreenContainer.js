import { useNavigation } from "@react-navigation/native";
import React from "react";
import WelcomeScreen from "../screen";

const WelcomeScreenContainer = () => {
  const { navigate } = useNavigation();

  const imageSource = require("../../../assets/images/Welcome.png");

  const onSignInPress = () => {
    navigate("Sign In");
  };

  const onSignUpPress = () => {
    navigate("Sign Up");
  };

  return (
    <WelcomeScreen
      imageSource={imageSource}
      onSignInPress={onSignInPress}
      onSignUpPress={onSignUpPress}
    />
  );
};

export default WelcomeScreenContainer;
