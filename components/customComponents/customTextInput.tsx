import React from "react";
import { TextInput } from "react-native";
import Colors, { ColorType } from "@/constants/Colors";
import { GlobalStyles } from "@/components/GlobalStyles";
import { useGlobalContext } from "../globalContext";

import { TextProps, TextStyle } from "react-native";

export default function CustomTextInput({
  style,
  color,
  ...props
}: {
  style?: TextStyle;
  color?: ColorType;
  [key: string]: any;
}) {
  const { house, theme } = useGlobalContext();
  if (!house || !theme) {
    return <TextInput style={[GlobalStyles.font, style]} {...props} />;
  }
  return (
    <TextInput
      style={[
        GlobalStyles.font,
        {
          color: Colors[house][theme].text,
          backgroundColor: color && Colors[house][theme][color],
        },
        style,
      ]}
      {...props}
    />
  );
}
