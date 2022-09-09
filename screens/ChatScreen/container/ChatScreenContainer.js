import React from "react";
import ChatScreen from "../screen";
import useAuthentication from "../../../utils/hooks";
import { getAuth, signOut } from "firebase/auth";

const ChatScreenContainer = () => {
  const { user } = useAuthentication();
  const auth = getAuth();
  const onSignOutPress = () => {
    signOut(auth);
  };

  return <ChatScreen onSignOutPress={onSignOutPress} email={user?.email} />;
};

export default ChatScreenContainer;
