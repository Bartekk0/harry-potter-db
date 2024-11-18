import { StyleSheet } from "react-native";
import { setCustomText } from "react-native-global-props";

export const GlobalStyles = StyleSheet.create({
  font: {
    fontFamily: "Manrope",
    fontSize: 24,
    fontWeight: "400",
  },
});

setCustomText({ style: GlobalStyles.font });
