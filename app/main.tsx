import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Heading from "@/components/mainPage/Heading";
import Tile from "@/components/mainPage/Tile";
import TilePlace from "@/components/mainPage/TilePlace";
import Colors from "@/constants/Colors";
import { useGlobalContext } from "@/components/globalContext";

export default function Main() {
  const { theme, house, name } = useGlobalContext();

  return (
    <ScrollView style={{ backgroundColor: Colors[house][theme].bg }}>
      <Heading name={name} />
      <TilePlace>
        <Tile href={"/(browser)"} title="Browser" icon="search" />
        {/* <Tile href={"/"} title="Timeline" icon="clock-o" /> */}
        {/* <Tile href={"/"} title="Quiz" icon="question" /> */}
        <Tile href={"/"} title="Settings" icon="gear" />
      </TilePlace>
    </ScrollView>
  );
}
