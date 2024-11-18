import React, { useEffect, useState } from "react";
import { Text, View, Image, Linking } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { useGlobalSearchParams } from "expo-router";
import fetchData from "@/scripts/fetchData";

export default function CharacterInfo() {
  const { id } = useGlobalSearchParams();
  const navigation = useNavigation();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(`https://api.potterdb.com/v1/characters/${id}`)
      .then((data) => {
        if (data) {
          setCharacter(data["data"]);
          console.log("Data fetched:", data["data"]);
        } else {
          console.log("No data found or error reading file.");
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    if (character) {
      navigation.setOptions({
        title: character["attributes"]["name"],
      });
    }
  }, [character, navigation]);

  return (
    <View>
      <Text>Character ID: {id}</Text>
      {error ? (
        <Text>Error fetching character data.</Text>
      ) : (
        character && (
          <View>
            <Text>Name: {character["attributes"]["name"]}</Text>
            <Text>House: {character["attributes"]["house"]}</Text>
            {character["attributes"]["image"] && (
              <Image
                source={{ uri: character["attributes"]["image"] }}
                style={{ width: 200, height: 300 }}
              />
            )}
            <Text>Species: {character["attributes"]["species"]}</Text>
            <Text
              onPress={() => Linking.openURL(character["attributes"]["wiki"])}
            >
              Readmore
            </Text>
          </View>
        )
      )}
    </View>
  );
}
