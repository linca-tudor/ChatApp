import React from "react";
import useAuthentication from "./../utils/hooks";
import UserDrawer from "./userDrawer";
import AuthStack from "./authStack";

const RootNavigation = () => {
  const { user } = useAuthentication();

  return user ? <UserDrawer /> : <AuthStack />;
};

export default RootNavigation;
