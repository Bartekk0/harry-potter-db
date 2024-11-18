import { Stack } from "expo-router";

export default function Index() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="[id]" options={{ presentation: "modal" }} />
    </Stack>
  );
}
