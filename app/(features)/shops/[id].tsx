import FlowerShop from "@/components/comp/flowerShop";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const shops = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <FlowerShop />
    </View>
  );
};

export default shops;
