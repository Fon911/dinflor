import FlowerServices from "@/components/comp/flowerServices";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const product = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <FlowerServices />
    </View>
  );
};

export default product;
