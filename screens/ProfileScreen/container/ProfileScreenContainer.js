import React from "react";
import ProfileScreen from "../screen";
import useAuthentication from "../../../utils/hooks";
import { getAuth, signOut } from "firebase/auth";

const ProfileScreenContainer = () => {
  const { user } = useAuthentication();
  const auth = getAuth();
  const onSignOutPress = () => {
    signOut(auth);
  };

  return <ProfileScreen onSignOutPress={onSignOutPress} email={user?.email} />;
};

export default ProfileScreenContainer;
