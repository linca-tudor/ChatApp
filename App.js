import React from "react";
import { ThemeProvider } from "react-native-elements";
import "./config/firebase";
import RootNavigation from "./navigation";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function App() {
  return <RootNavigation />;
}
