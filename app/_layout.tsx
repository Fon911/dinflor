import "./global.css";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Medium: require("../assets/fonts/Inter-Medium.ttf"),
    Bold: require("../assets/fonts/Inter-Bold.ttf"),
    Regular: require("../assets/fonts/Inter-Regular.ttf"),
    SemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    Light: require("../assets/fonts/Inter-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(features)" options={{ headerShown: false }} />

      <Stack.Screen name="(root)" options={{ headerShown: false }} />
    </Stack>
  );
}
