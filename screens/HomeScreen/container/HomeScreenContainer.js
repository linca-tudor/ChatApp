import React from "react";
import HomeScreen from "../screen";
import useAuthentication from "../../../utils/hooks/";
import { getAuth, signOut } from "firebase/auth";

const HomeScreenContainer = () => {
  const { user } = useAuthentication();
  const auth = getAuth();
  const onSignOutPress = () => {
    signOut(auth);
  };

  return <HomeScreen onSignOutPress={onSignOutPress} email={user?.email} />;
};

export default HomeScreenContainer;
