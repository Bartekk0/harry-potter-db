import React from "react";
import { Text, View, Modal, Pressable } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { SetStateAction, useState, Dispatch } from "react";

export default function FiltersModal({
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
    >
      <View style={{}}>
        <View style={{}}>
          <Text style={{}}>Filters</Text>
          <Pressable style={[]} onPress={() => setVisible(!visible)}>
            <Text style={{}}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
