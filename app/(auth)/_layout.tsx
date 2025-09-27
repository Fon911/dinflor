import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="sms" options={{ headerShown: false }} />
      <Stack.Screen name="loginsms" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
