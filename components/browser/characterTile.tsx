import { FontAwesome } from "@expo/vector-icons";
import { Link, LinkProps } from "expo-router";
import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { useGlobalContext } from "@/components/globalContext";
import Colors from "@/constants/Colors";
import CustomText from "../customComponents/customText";
import CustomView from "../customComponents/customView";
export default function Character({
  title,
  image,
  house: house_,
  href,
}: {
  title: string;
  image: string;
  house: string;
  href: LinkProps["href"];
}) {
  const { theme, house } = useGlobalContext();
  return (
    <Link href={href} style={{ width: "100%" }}>
      <CustomView color="primary" style={styles.box}>
        <CustomView
          style={{
            borderRadius: 20,
            overflow: "hidden",
            height: "100%",
            aspectRatio: 2 / 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          color="tertiary"
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ height: "100%", width: "100%" }}
            />
          ) : (
            <FontAwesome
              name="question"
              size={200}
              color={Colors[house][theme].text}
            />
          )}
        </CustomView>

        <CustomText style={styles.title}>{title}</CustomText>
        {/* <CustomText style={styles.title}>{house_}</CustomText> */}
      </CustomView>
    </Link>
  );
}

const { width } = Dimensions.get("window");
// (100 - 3 * 2.5) / 2 =
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",

    gap: 20,

    width: "100%",

    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    height: 200,
    overflow: "hidden",
  },
  title: {
    width: "60%",
    fontWeight: "300",
  },
});
