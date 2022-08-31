import { React } from "react";
import SignInScreen from "../screen";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreenContainer = () => {
  const auth = getAuth();

  const signIn = async () => {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  };

  return <SignInScreen signIn={signIn} />;
};

export default SignInScreenContainer;
