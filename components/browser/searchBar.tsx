import React from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { useGlobalContext } from "@/components/globalContext";
import Colors from "@/constants/Colors";
import CustomView from "@/components/customComponents/customView";
import CustomTextInput from "@/components/customComponents/customTextInput";

export default function SearchBar({
  onSearch,
  setSettingsVisible,
}: {
  onSearch: (query: string) => void;
  setSettingsVisible: (visible: boolean) => void;
}) {
  const { theme, house, search, setSearch } = useGlobalContext();
  let input = "";
  return (
    <CustomView style={styles.view} color="primary">
      <CustomTextInput
        placeholder="Search..."
        style={styles.searchBar}
        color="primary"
        onBlur={() => {
          setSearch(input);
        }}
        onChangeText={(text: string) => (input = text)}
      />
      {/* <Pressable onPress={() => setSettingsVisible(true)}> */}
      {/* <Feather name="settings" size={30} color={Colors[house][theme].text} /> */}
      {/* </Pressable> */}
    </CustomView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
  },
  view: {
    padding: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
