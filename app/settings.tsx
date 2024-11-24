import React from "react";
import { Pressable } from "react-native";
import { useGlobalContext } from "@/components/globalContext";
import { FontAwesome } from "@expo/vector-icons";
import CustomText from "@/components/customComponents/customText";
import CustomTextInput from "@/components/customComponents/customTextInput";
export default function Settings() {
  const { name, setName, house, setHouse, theme, setTheme } =
    useGlobalContext();
  return (
    <>
      <CustomText>Setting</CustomText>
      {/* CHANGE NAME */}
      <CustomTextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text: string) => {
          if (/^[a-zA-Z\s]*$/.test(text)) {
            setName(text);
          }
        }}
      />
      {/* <FontAwesome name="pencil" size={24} color="black" /> */}
      {/* CHANGE HOUSE */}
      <CustomText>House: {house}</CustomText>
      {/* <FontAwesome name="pencil" size={24} color="black" /> */}
      {/* CHANGE THEME */}
      <CustomText>Theme: {theme}</CustomText>
      {/* <FontAwesome name="pencil" size={24} color="black" /> */}
      {/* QUIZ RESULTS */}
      <CustomText>Quiz results</CustomText>
      {/* FAVORITE CHARACTERS */}
      <CustomText>Favorite characters</CustomText>
      <Pressable>
        <CustomText> Submit </CustomText>
      </Pressable>
    </>
  );
}
