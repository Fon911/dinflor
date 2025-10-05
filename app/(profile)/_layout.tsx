import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="bonus" options={{ headerShown: false }} />
      <Stack.Screen name="waitlist" options={{ headerShown: false }} />
      <Stack.Screen name="order" options={{ headerShown: false }} />
      <Stack.Screen name="notice" options={{ headerShown: false }} />
      <Stack.Screen name="event" options={{ headerShown: false }} />
      <Stack.Screen name="help" options={{ headerShown: false }} />
    </Stack>
  );
}
