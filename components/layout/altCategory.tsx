import React from "react";
import { Text, View } from "react-native";

const AltCategory = ({ children, title }: any) => {
  return (
    <View className="py-4 bg-white">
      {/* Контейнер заголовка */}
      <View className="flex-row items-center justify-between">
        <Text className="text-[16px] font-interBold text-main-200 uppercase">
          {title}
        </Text>
        <View className=" h-[2px] w-[120px] bg-[#FF4081] mr-[10px]" />
      </View>

      {/* Контейнер для дочерних элементов (вашего горизонтального списка) */}
      <View className="mt-4">{children}</View>
    </View>
  );
};

export default AltCategory;
