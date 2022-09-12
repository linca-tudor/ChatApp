import { useNavigation } from "@react-navigation/native";
import React from "react";
import WelcomeScreen from "../screen";
import Routes from '../../../assets/Routes'

const WelcomeScreenContainer = () => {
  const { navigate } = useNavigation();

  const imageSource = require("../../../assets/images/Welcome.png");

  const onSignInPress = () => {
    navigate(Routes.signIn);
  };

  const onSignUpPress = () => {
    navigate(Routes.signUp);
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
