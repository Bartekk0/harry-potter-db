import { Link, LinkProps } from "expo-router";
import React from "react";
import { Text, StyleSheet, Dimensions, View, Pressable } from "react-native";

export default function Button({
  title,
  setVisible,
}: {
  title: string;
  setVisible: (visible: boolean) => void;
}) {
  return (
    <Pressable onPress={() => setVisible(true)} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "49%",
    borderRadius: 5,
    textAlign: "center",
    padding: 10,
    backgroundColor: "#ddd",
  },
  text: {},
});
