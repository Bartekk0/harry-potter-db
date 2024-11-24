import React from "react";
import { Pressable } from "react-native";
import Colors, { ColorType } from "@/constants/Colors";
import { GlobalStyles } from "@/components/GlobalStyles";
import { useGlobalContext } from "../globalContext";

import { ViewStyle } from "react-native";

export default function CustomPressable({
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
    return <Pressable style={style} {...props} />;
  }
  return (
    <Pressable
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
