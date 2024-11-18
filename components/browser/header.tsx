import React from "react";
import Button from "./searchOptionsButton";
import SearchBar from "./searchBar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import SortingModal from "./sorting";
import SettingsModal from "./settings";
import FiltersModal from "./filters";

export default function Header() {
  const [settingsVisible, setSettingsVisible] = React.useState(false);
  const [sortingVisible, setSortingVisible] = React.useState(false);
  const [filtersVisible, setFiltersVisible] = React.useState(false);
  return (
    <View style={styles.header}>
      <SearchBar
        onSearch={(query: string) => {
          console.log(query);
        }}
        setSettingsVisible={setSettingsVisible}
      />
      <Button title="Sort" setVisible={setSortingVisible} />
      <Button title="Filters" setVisible={setFiltersVisible} />

      <SettingsModal
        visible={settingsVisible}
        setVisible={setSettingsVisible}
      />
      <SortingModal visible={sortingVisible} setVisible={setSortingVisible} />
      <FiltersModal visible={filtersVisible} setVisible={setFiltersVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
  },
});
