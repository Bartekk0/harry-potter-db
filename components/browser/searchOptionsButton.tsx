import { Link, LinkProps } from "expo-router";
import React from "react";
import { Text, StyleSheet, Dimensions, View, Pressable } from "react-native";
import CustomText from "@/components/customComponents/customText";
import CustomPressable from "@/components/customComponents/customPressable";

export default function Button({
  title,
  setVisible,
}: {
  title: string;
  setVisible: (visible: boolean) => void;
}) {
  return (
    <CustomPressable
      onPress={() => setVisible(true)}
      style={styles.button}
      color="secondary"
    >
      <CustomText>{title}</CustomText>
    </CustomPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "49%",
    borderRadius: 10,
    textAlign: "center",
    padding: 10,
    marginTop: 30,
  },
});
