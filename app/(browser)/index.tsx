import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";
import fetchData from "@/scripts/fetchData";
import Header from "@/components/browser/header";
import Character from "@/components/browser/characterTile";
import { useGlobalContext } from "@/components/globalContext";
import Colors from "@/constants/Colors";
import CustomView from "@/components/customComponents/customView";
import CustomPressable from "@/components/customComponents/customPressable";
import CustomText from "@/components/customComponents/customText";

export default function Search() {
  const { theme, house, sorting, search, setSearch } = useGlobalContext();

  const scrollRef = useRef();
  let [characters, setCharacters] = useState([]);
  let error = false;
  let i = 1;
  let [page, setPage] = useState(1);
  let [size, setSize] = useState(50);

  // matches
  // eq
  // cont
  // 'null' 'false' 'true'
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    // 4962 characters (in docs 4675)
    // max 100 per page

    fetchData(
      `https://api.potterdb.com/v1/characters?page[number]=${page}&page[size]=${size}&sort=${
        sorting.order ? "" : "-"
      }${sorting.by}&filter[name_cont]=${search}`
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
  }, [page, setPage, sorting, search]);

  return (
    <CustomView color="primary">
      {error ? (
        <CustomView>
          <Link
            href={{
              pathname: "./(browser)",
            }}
          >
            Couldn't fetch data. Click here to try again.
          </Link>
        </CustomView>
      ) : (
        <ScrollView ref={scrollRef}>
          <CustomView style={styles.view} color="bg">
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
          </CustomView>
          <CustomView style={styles.footer} color="bg">
            <CustomPressable
              style={styles.footerButton}
              onPress={() => {
                setPage(page - 1);
                scrollRef.current?.scrollTo({ y: 0, animated: true });
              }}
              disabled={page === 1}
              color="secondary"
            >
              <CustomText>Prev</CustomText>
            </CustomPressable>
            <CustomPressable
              style={styles.footerButton}
              onPress={() => {
                setPage(page + 1);
                scrollRef.current?.scrollTo({ y: 0, animated: true });
              }}
              disabled={size > characters.length}
              color="secondary"
            >
              <CustomText>Next</CustomText>
            </CustomPressable>
          </CustomView>
        </ScrollView>
      )}
    </CustomView>
  );
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    minHeight: height - 80,
    gap: 10,
    padding: 10,
  },
  footer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 80,
  },
  footerButton: {
    padding: 10,
    borderRadius: 10,
  },
});
