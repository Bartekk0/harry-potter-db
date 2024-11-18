import { Link, LinkProps } from "expo-router";
import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

export default function Tile({ title, href }: { title: string; href: string }) {
  const hrefLink = href as LinkProps["href"];

  return (
    <Link href={hrefLink} style={styles.box}>
      <Text style={styles.title}>{title}</Text>
    </Link>
  );
}

const { width } = Dimensions.get("window");
// (100 - 3 * 2.5) / 2 =
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexShrink: 0,

    width: "93.33%",
    height: width * 0.6,

    marginTop: "3.33%",
    marginLeft: "3.33%",
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 50,
    fontWeight: "300",
    textAlign: "center",
  },
});
