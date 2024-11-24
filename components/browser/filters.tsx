import React from "react";
import { Text, View, Modal, Pressable, StyleSheet } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { SetStateAction, useState, Dispatch } from "react";
import CustomText from "@/components/customComponents/customText";
import CustomView from "@/components/customComponents/customView";
import CustomPressable from "@/components/customComponents/customPressable";

export default function FiltersModal({
  visible,
  setVisible,
  sorting,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  sorting: string;
}) {
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
          <CustomText>Filters</CustomText>
          <CustomPressable
            onPress={() => setVisible(!visible)}
            color="secondary"
            style={styles.submit}
          >
            <CustomText>SUBMIT</CustomText>
          </CustomPressable>
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
});
