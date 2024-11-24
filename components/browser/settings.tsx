import React from "react";
import { Text, View, Modal, Pressable, StyleSheet } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { SetStateAction, useState, Dispatch } from "react";
import CustomText from "@/components/customComponents/customText";
import CustomView from "@/components/customComponents/customView";
import CustomPressable from "@/components/customComponents/customPressable";

export default function SettingsModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
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
      <CustomView style={styles.main} color="quaternary">
        <CustomText style={{ fontSize: 50 }}>Settings</CustomText>
        <CustomPressable color="secondary">
          <Text>Api</Text>
        </CustomPressable>
        <CustomPressable color="secondary">
          <Text>Language*</Text>
        </CustomPressable>

        <CustomPressable onPress={() => setVisible(!visible)} color="secondary">
          <CustomText>Submit</CustomText>
        </CustomPressable>
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
});
