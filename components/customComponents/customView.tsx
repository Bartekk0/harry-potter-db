import React from "react";
import { View } from "react-native";
import Colors, { ColorType } from "@/constants/Colors";
import { GlobalStyles } from "@/components/GlobalStyles";
import { useGlobalContext } from "../globalContext";

import { ViewStyle } from "react-native";

export default function CustomTextInput({
  style,
  color,
  ...props
}: {
  style?: ViewStyle;
  color?: ColorType;
  [key: string]: any;
}) {
  const { house, theme } = useGlobalContext();
  if (!house || !theme) {
    return <View style={style} {...props} />;
  }
  return (
    <View
      style={[
        {
          backgroundColor: color && Colors[house][theme][color],
        },
        style,
      ]}
      {...props}
    />
  );
}
