import GenLayout from "@/components/layout/Genlayout";
import React from "react";
import { Text, View } from "react-native";

const order = () => {
  return (
    <GenLayout pageName="Мои Заказы" backArrow>
      <View>
        <Text>Мои Заказы</Text>
      </View>
    </GenLayout>
  );
};

export default order;
