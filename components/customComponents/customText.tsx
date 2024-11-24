import React from "react";
import { Text } from "react-native";
import Colors from "@/constants/Colors";
import { GlobalStyles } from "@/components/GlobalStyles";
import { useGlobalContext } from "../globalContext";

import { TextProps, TextStyle } from "react-native";

export default function CustomText({
  style,
  ...props
}: {
  style?: TextStyle;
  [key: string]: any;
}) {
  const { house, theme } = useGlobalContext();

  if (!house || !theme) {
    return <Text style={[GlobalStyles.font, style]} {...props} />;
  }
  return (
    <Text
      style={[GlobalStyles.font, { color: Colors[house][theme].text }, style]}
      {...props}
    />
  );
}
