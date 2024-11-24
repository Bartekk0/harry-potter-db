import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import { RadioButton } from "react-native-paper";
import { useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { useGlobalContext, Theme, House } from "@/components/globalContext";
import Colors from "@/constants/Colors";
import { setCustomText, setCustomTextInput } from "react-native-global-props";
import { GlobalStyles } from "@/components/GlobalStyles";
import CustomText from "@/components/customComponents/customText";
import CustomTextInput from "@/components/customComponents/customTextInput";
import CustomView from "@/components/customComponents/customView";

export default function Index() {
  const { name, setName, theme, setTheme, house, setHouse } =
    useGlobalContext();
  const systemTheme = useColorScheme();
  if (!theme) setTheme(systemTheme == "dark" ? "dark" : "light");
  const router = useRouter();

  function submit() {
    if (name === "" || (house as string) == "" || !theme) {
      return;
    }
    router.navigate("./main");
  }

  return (
    <CustomView color="bg" style={styles.main}>
      {/* NAME */}
      <CustomView style={styles.group} color="primary">
        <CustomText>What is your name?</CustomText>
        <CustomTextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={(text: string) => {
            if (/^[a-zA-Z\s]*$/.test(text)) {
              setName(text);
            }
          }}
        />
      </CustomView>
      {/* HOUSE */}
      <CustomView style={styles.group} color="primary">
        <CustomText>What house would you like to be?</CustomText>
        <RadioButton.Group
          onValueChange={(value) => setHouse(value as House)}
          value={house}
        >
          <CustomView style={styles.radioButtons}>
            <CustomView style={styles.radioButton}>
              <CustomText onPress={() => setHouse("gryffindor")}>
                Gryffindor
              </CustomText>
              <RadioButton
                value="gryffindor"
                color={theme && Colors.gryffindor[theme].text}
                uncheckedColor={house && Colors[house][theme].text}
              />
            </CustomView>
            <CustomView style={styles.radioButton}>
              <CustomText onPress={() => setHouse("hufflepuff")}>
                Hufflepuff
              </CustomText>
              <RadioButton
                value="hufflepuff"
                color={theme && Colors.hufflepuff[theme].text}
                uncheckedColor={house && Colors[house][theme].text}
              />
            </CustomView>
            <CustomView style={styles.radioButton}>
              <CustomText onPress={() => setHouse("ravenclaw")}>
                Ravenclaw
              </CustomText>
              <RadioButton
                value="ravenclaw"
                color={theme && Colors.ravenclaw[theme].text}
                uncheckedColor={house && Colors[house][theme].text}
              />
            </CustomView>
            <CustomView style={styles.radioButton}>
              <CustomText onPress={() => setHouse("slytherin")}>
                Slytherin
              </CustomText>
              <RadioButton
                value="slytherin"
                color={theme && Colors.slytherin[theme].text}
                uncheckedColor={house && Colors[house][theme].text}
              />
            </CustomView>
          </CustomView>
        </RadioButton.Group>
      </CustomView>
      {/* THEME */}
      <CustomView style={styles.group} color="primary">
        <CustomText>What theme do you prefer?</CustomText>

        <RadioButton.Group
          onValueChange={(value) => setTheme(value as Theme)}
          value={theme}
        >
          <CustomView style={styles.radioButtons}>
            <CustomView style={styles.radioButton}>
              <CustomText onPress={() => setTheme("light")}>Light</CustomText>
              <RadioButton value="light" color="white" uncheckedColor="white" />
            </CustomView>
            <CustomView style={styles.radioButton}>
              <CustomText onPress={() => setTheme("dark")}>Dark</CustomText>
              <RadioButton value="dark" color="black" uncheckedColor="black" />
            </CustomView>
          </CustomView>
        </RadioButton.Group>
      </CustomView>
      {/* <Pressable onPress={}> */}

      <Pressable
        onPress={() => submit()}
        style={[
          styles.button,
          {
            backgroundColor: house && Colors[house][theme].primary,
          },
        ]}
      >
        <CustomText style={{ textAlign: "center", fontWeight: 700 }}>
          SUBMIT
        </CustomText>
      </Pressable>
      {/* </Pressable> */}
    </CustomView>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    display: "flex",
    width: "49%",
    gap: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    margin: ".5%",

    borderRadius: 10,
  },
  radioButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: 10,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    gap: 10,
    padding: 15,
  },
  button: {
    width: "80%",
    display: "flex",
    boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.1)",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
    borderRadius: 20,
  },
});
