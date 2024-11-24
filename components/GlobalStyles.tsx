import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { setCustomText, setCustomTextInput } from "react-native-global-props";
import { useGlobalContext } from "@/components/globalContext";
import Colors from "@/constants/Colors";

export const GlobalStyles = StyleSheet.create({
  font: {
    fontFamily: "Manrope",
    fontSize: 24,
    fontWeight: "400",
  },
});

export default function GlobalStylesProvider() {
  const { theme, house } = useGlobalContext();

  useEffect(() => {
    setCustomText({
      style: [
        GlobalStyles.font,
        { color: house ? Colors[house][theme].text : "black" },
      ],
    });
    setCustomTextInput({
      style: [
        GlobalStyles.font,
        { color: house ? Colors[house][theme].text : "black" },
      ],
    });
  }, [theme, house]);

  return <></>;
}
