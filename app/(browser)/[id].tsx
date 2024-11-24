import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { useGlobalSearchParams } from "expo-router";
import fetchData from "@/scripts/fetchData";
import { useGlobalContext } from "@/components/globalContext";
import Colors from "@/constants/Colors";
import CustomText from "@/components/customComponents/customText";
import CustomView from "@/components/customComponents/customView";
import CustomPressable from "@/components/customComponents/customPressable";
import { FontAwesome } from "@expo/vector-icons";

export default function CharacterInfo() {
  const { id } = useGlobalSearchParams();
  const navigation = useNavigation();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);
  const { theme, house } = useGlobalContext();

  useEffect(() => {
    fetchData(`https://api.potterdb.com/v1/characters/${id}`)
      .then((data) => {
        if (data) {
          setCharacter(data["data"]);
          console.log("Data fetched");
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
        headerStyle: {
          backgroundColor: Colors[house][theme].bg,
        },
        headerTintColor: Colors[house][theme].text,
      });
    }
  }, [character, navigation]);

  return (
    <CustomView color="bg" style={styles.main}>
      {/* <CustomText>Character ID: {id}</CustomText> */}
      {error ? (
        <CustomText>Error fetching character data.</CustomText>
      ) : (
        character && (
          <ScrollView>
            {character["attributes"]["image"] ? (
              <Image
                source={{ uri: character["attributes"]["image"] }}
                style={{ width: 300, height: 450, borderRadius: 20 }}
              />
            ) : (
              <FontAwesome
                name="question"
                size={450}
                color={Colors[house][theme].text}
              />
            )}

            {character["attributes"]["name"] && (
              <CustomText style={{ width: 300 }}>
                Name: {character["attributes"]["name"]}
              </CustomText>
            )}
            {character["attributes"]["species"] && (
              <CustomText style={{ width: 300 }}>
                Species: {character["attributes"]["species"]}
              </CustomText>
            )}
            {character["attributes"]["gender"] && (
              <CustomText style={{ width: 300 }}>
                Gender: {character["attributes"]["gender"]}
              </CustomText>
            )}
            {character["attributes"]["born"] && (
              <CustomText style={{ width: 300 }}>
                Born: {character["attributes"]["born"]}
              </CustomText>
            )}
            {character["attributes"]["died"] && (
              <CustomText style={{ width: 300 }}>
                Died: {character["attributes"]["died"]}
              </CustomText>
            )}
            {character["attributes"]["house"] && (
              <CustomText style={{ width: 300 }}>
                House: {character["attributes"]["house"]}
              </CustomText>
            )}
            {character["attributes"]["eyeColour"] && (
              <CustomText style={{ width: 300 }}>
                Eye Colour: {character["attributes"]["eyeColour"]}
              </CustomText>
            )}
            {character["attributes"]["hairColour"] && (
              <CustomText style={{ width: 300 }}>
                Hair Colour: {character["attributes"]["hairColour"]}
              </CustomText>
            )}
            {character["attributes"]["ancestry"] && (
              <CustomText style={{ width: 300 }}>
                Ancestry: {character["attributes"]["ancestry"]}
              </CustomText>
            )}
            {character["attributes"]["wand"] && (
              <CustomText style={{ width: 300 }}>
                Wand: {character["attributes"]["wand"]["wood"]}{" "}
                {character["attributes"]["wand"]["core"]}{" "}
                {character["attributes"]["wand"]["length"]}
              </CustomText>
            )}
            {character["attributes"]["patronus"] && (
              <CustomText style={{ width: 300 }}>
                Patronus: {character["attributes"]["patronus"]}
              </CustomText>
            )}

            <CustomPressable></CustomPressable>
            <CustomPressable
              onPress={() => Linking.openURL(character["attributes"]["wiki"])}
              color="secondary"
              style={styles.readmore}
            >
              <CustomText style={{ textAlign: "center" }}>Readmore</CustomText>
            </CustomPressable>
          </ScrollView>
        )
      )}
    </CustomView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    height: "100%",
  },
  readmore: {
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
});
