import { Link, LinkProps } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useGlobalContext } from "@/components/globalContext";
import Colors from "@/constants/Colors";
import CustomText from "@/components/customComponents/customText";
import CustomView from "@/components/customComponents/customView";

export default function Tile({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: string;
}) {
  const hrefLink = href as LinkProps["href"];
  const { theme, house } = useGlobalContext();
  return (
    <Link href={hrefLink} style={styles.link}>
      <CustomView style={styles.box} color="primary">
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomView style={styles.icon}>
          <FontAwesome
            name={icon as any}
            size={70}
            color={Colors[house][theme].tertiary}
          />
        </CustomView>
      </CustomView>
    </Link>
  );
}

const { width } = Dimensions.get("window");
// (100 - 3 * 2.5) / 2 =
const styles = StyleSheet.create({
  box: {
    display: "flex",

    flexShrink: 0,

    width: "100%",
    height: "100%",

    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    paddingInline: 20,
  },
  link: {
    width: "93.33%",
    height: width * 0.3,
    marginTop: "3.33%",
    marginLeft: "3.33%",
  },
  title: {
    fontSize: 50,
    fontWeight: "300",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.3,
    width: width * 0.3,
  },
});
