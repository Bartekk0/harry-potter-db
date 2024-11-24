import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GlobalProvider, useGlobalContext } from "@/components/globalContext";
import GlobalStylesProvider from "@/components/GlobalStyles";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manrope: require("../assets/fonts/Manrope-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GlobalProvider>
      <GlobalStylesProvider />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="index"
      >
        <Stack.Screen name="index" options={{ title: "Choose your house" }} />
        <Stack.Screen name="main" options={{ title: "Home" }} />
        <Stack.Screen name="(browser)" options={{ title: "Browser" }} />
      </Stack>
    </GlobalProvider>
  );
}
