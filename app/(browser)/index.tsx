import React, { useEffect, useState } from "react";
import { Text, View, Pressable, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import "@/constants/GlobalStyles";
import fetchData from "@/scripts/fetchData";
import Header from "@/components/browser/header";
import Character from "@/components/browser/characterTile";

export default function Search() {
  let [characters, setCharacters] = useState([]);
  let error = false;
  useEffect(() => {
    // last page is 497 (with 10 characters per page)
    // on last page are 2 characters
    // 496 * 10 + 2 = 4962 characters
    fetchData(
      "https://api.potterdb.com/v1/characters?page[number]=1&page[size]=50"
    )
      .then((data) => {
        if (data) {
          setCharacters(data["data"]);
          console.log("Data fetched");
        } else {
          console.log("No data found in response");
        }
      })
      .catch((error) => {
        console.log(error);
        error = true;
      });
  }, []);

  return (
    <>
      {error ? (
        <View>
          <Link
            href={{
              pathname: "./(browser)",
            }}
          >
            Couldn't fetch data. Click here to try again.
          </Link>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.view}>
            <Header />
            {characters != null &&
              characters!.map((character) => {
                return (
                  <Character
                    href={{
                      pathname: "./(browser)/[id]",
                      params: { id: character["id"] },
                    }}
                    key={character["id"]}
                    title={character["attributes"]["name"]}
                    image={character["attributes"]["image"]}
                    house={character["attributes"]["house"]}
                  />
                );
              })}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: 10,
    padding: 10,
  },
});
