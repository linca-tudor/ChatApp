import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import getStyles from "./HomeScreen.styles";

export default function HomeScreen({ onSignOutPress, email }) {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text>Welcome {email}!</Text>

      <Button title="Sign Out" style={styles.button} onPress={onSignOutPress} />
    </View>
  );
}