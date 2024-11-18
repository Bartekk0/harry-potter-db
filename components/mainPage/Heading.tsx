import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Heading({ name }: { name: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 70,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 50,
    fontWeight: "300",
  },
});
