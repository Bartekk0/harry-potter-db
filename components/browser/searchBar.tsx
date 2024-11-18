import React from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function SearchBar({
  onSearch,
  setSettingsVisible,
}: {
  onSearch: (query: string) => void;
  setSettingsVisible: (visible: boolean) => void;
}) {
  let search = "";
  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Search..."
        style={styles.searchBar}
        onBlur={() => onSearch(search)}
        onChangeText={(text) => (search = text)}
      />
      <Pressable onPress={() => setSettingsVisible(true)}>
        <Feather name="settings" size={30} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 10,
    flex: 1,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
