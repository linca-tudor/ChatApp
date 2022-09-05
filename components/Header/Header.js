import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text, TouchableOpacity } from "react-native";
import getStyles from "./Header.styles";
import { useNavigation } from "@react-navigation/native";

const Header = ({ height, style, backButton, buttonSide }) => {
  const { goBack } = useNavigation();
  const styles = getStyles(height, buttonSide);
  return (
    <View style={[styles.header, style]}>
      {backButton && (
        <TouchableOpacity style={styles.backButtonContainer} onPress={goBack}>
          <MaterialIcons
            name={Platform.OS === "android" ? "arrow-back" : "arrow-back-ios"}
            size={20}
            color="black"
            style={styles.backButtonIcon}
          />
          <Text style={styles.backButtonText}>Return</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
