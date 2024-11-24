import React from "react";
import Button from "./searchOptionsButton";
import SearchBar from "./searchBar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import SortingModal from "./sorting";
import SettingsModal from "./settings";
import FiltersModal from "./filters";
import { useGlobalContext } from "@/components/globalContext";
import Colors from "@/constants/Colors";
import CustomView from "@/components/customComponents/customView";

export default function Header() {
  const { theme, house } = useGlobalContext();

  const [settingsVisible, setSettingsVisible] = React.useState(false);
  const [sortingVisible, setSortingVisible] = React.useState(false);
  const [filtersVisible, setFiltersVisible] = React.useState(false);
  return (
    <CustomView style={styles.header} color="bg">
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
    </CustomView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
