import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="products/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="shops" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
