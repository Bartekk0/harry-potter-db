import { FontAwesome } from "@expo/vector-icons";
import { Link, LinkProps } from "expo-router";
import React from "react";
import { Text, StyleSheet, Dimensions, Image } from "react-native";

export default function Tile({
  title,
  image,
  house,
  href,
}: {
  title: string;
  image: string;
  house: string;
  href: LinkProps["href"];
}) {
  return (
    <Link href={href} style={styles.box}>
      {image ? (
        <Image source={{ uri: image }} style={{ width: 100, height: 150 }} />
      ) : (
        <FontAwesome name="question" size={150} color={"black"} />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{house}</Text>
    </Link>
  );
}

const { width } = Dimensions.get("window");
// (100 - 3 * 2.5) / 2 =
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    width: "95%",

    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: width * 0.6,
  },
  title: {
    fontWeight: "300",
    textAlign: "center",
  },
});
