import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Heading from "@/components/mainPage/Heading";
import Tile from "@/components/mainPage/Tile";
import TilePlace from "@/components/mainPage/TilePlace";

export default function Index() {
  return (
    <ScrollView>
      <Heading name="User" />
      <TilePlace>
        <Tile href={"/(browser)"} title="Browser" />
        <Tile href={"/something"} title="Timeline" />
        <Tile href={"/something"} title="Quiz" />
        <Tile href={"/(tabs)/something"} title="Settings" />
      </TilePlace>
    </ScrollView>
  );
}
