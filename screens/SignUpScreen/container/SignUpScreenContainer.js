import React from "react";
import SignUpScreen from "../screen";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreenContainer = ({ navigation }) => {
  const auth = getAuth;

  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return <SignUpScreen signUp={signUp} />;
};

export default SignUpScreenContainer;
