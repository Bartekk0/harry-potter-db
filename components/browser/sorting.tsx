import React from "react";
import { Text, View, Modal, Pressable, StyleSheet } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { SetStateAction, useState, Dispatch } from "react";
import CustomText from "@/components/customComponents/customText";
import CustomView from "@/components/customComponents/customView";
import CustomPressable from "@/components/customComponents/customPressable";
import { useGlobalContext } from "../globalContext";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function SortingModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const { sorting, setSorting, theme, house } = useGlobalContext();
  const sortings = [
    "name",
    "house",
    "bloodStatus",
    "species",
    "patronus",
    "dateOfBirth",
  ];
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
      style={styles.modal}
    >
      <CustomView color="quaternary" style={styles.main}>
        <CustomView>
          <CustomText>Sort by:</CustomText>

          {sortings.map((sort) => (
            <CustomPressable
              onPress={() =>
                setSorting({
                  by: sort,
                  order: sorting.by == sort ? !sorting.order : true,
                })
              }
              color={sorting.by == sort ? "primary" : "secondary"}
              style={styles.button}
              key={sort}
            >
              <CustomText style={{ width: 150 }}>
                {capitalizeFirstLetter(sort)}
              </CustomText>
              {sorting.by == sort && (
                <FontAwesome
                  name={"sort-amount-" + (sorting.order ? "asc" : "desc")}
                  size={24}
                  color={Colors[house][theme].text}
                />
              )}
            </CustomPressable>
          ))}
          <CustomPressable
            onPress={() => setVisible(!visible)}
            color="secondary"
            style={styles.submit}
          >
            <CustomText style={{ textAlign: "center" }}>SUBMIT</CustomText>
          </CustomPressable>

          {/*  <CustomPressable
            onPress={() =>
              setSorting({
                by: "name",
                order: sorting.by == "name" ? !sorting.by : true,
              })
            }
            color={sorting.by == "name" ? "primary" : "secondary"}
            style={styles.button}
          >
            <CustomText>
              Name{" "}
              {sorting.by == "name" && (
                <FontAwesome
                  name={"sort-amount-" + (sorting.order ? "asc" : "desc")}
                  size={24}
                  color={Colors[house][theme].text}
                />
              )}
            </CustomText>
           </CustomPressable> */}
        </CustomView>
      </CustomView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  submit: {
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  button: {
    width: 200,
    padding: 10,
    borderRadius: 10,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
