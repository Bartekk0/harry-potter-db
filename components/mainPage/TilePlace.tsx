import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";

export default function TilePlace({ children }: { children: React.ReactNode }) {
  return (
    <View style={[styles.flex, { paddingBottom: "3.33%" }]}>{children}</View>
  );
}

// function setBounds(count: number) {
//   const { width } = Dimensions.get("window");
//   console.log(count, (width / 2) * count);

//   return {
//     width: width,
//     height: (width / ) * count,
//   };
// }

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
