import React from "react";
import { Image, Text, View } from "react-native";

const OrderCard = () => {
  return (
    <View className="w-full h-[200px] bg-[#F3F3F3] rounded-[10px]">
      <Image
        source={require("@/assets/test/luna.png")}
        className="w-full h-[125px] rounded-t-[10px]"
        resizeMode="cover"
      />
      <View className="mx-[17px]">
        <Text className="text-[12px] mt-[5px] font-interRegular text-main-200">
          В пути
        </Text>
        <Text className="text-[15px] mt-[5px] font-interBold text-main-200">
          Luna
        </Text>
        <View className="flex flex-row items-center mt-[5px]">
          <Image
            source={require("@/assets/Icon/star.png")}
            className="w-[12px] h-[12px] mr-[3px]"
          />
          <Text className="text-[10px] font-interMedium text-main-200">
            4.87 / 5 · 1 101 138 оценок
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
