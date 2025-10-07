import React from "react";
import { Image, Text, View } from "react-native";

const Reviews = () => {
  return (
    <View className="flex-1">
      <Image
        source={require("@/assets/test/luna.png")}
        className="w-full h-full"
        resizeMode="cover"
      />
      <View className="absolute bottom-0 left-[10px] right-0 h-[100px] ">
        <View className="flex flex-row items-center">
          <Text className="text-[24px] font-interBold text-white">Luna</Text>
          <Image
            source={require("@/assets/Icon/revabout.png")}
            className="w-[15px] h-[15px] ml-[10px]"
          />
        </View>
        <Text className="mt-[10px] text-[12px] font-interBold text-white mr-[71px]">
          Нежно Розовый букет из Французских Роз 11 шт. Букет F146 Звездопад
        </Text>
      </View>
      <View className="absolute right-[10px] bottom-[10px] items-center">
        <View className="relative mb-[20px]">
          {/* Круглая иконка */}
          <Image
            source={require("@/assets/test/luna.png")}
            className="w-[60px] h-[60px] rounded-full border-main-100 border"
            resizeMode="cover"
          />

          {/* Скоуп — маленькая иконка снизу справа */}
          <Image
            source={require("@/assets/Icon/revscope.png")}
            className="absolute w-[19px] h-[19px] bottom-0 right-0"
          />
        </View>
        <View className="mb-[20px] items-center">
          <Image
            source={require("@/assets/Icon/revlike.png")}
            className="w-[27px] h-[25px]"
          />
          <Text className="text-[10px] text-white font-interSemiBold">
            1200
          </Text>
        </View>
        <View className="mb-[20px] items-center">
          <Image
            source={require("@/assets/Icon/revcom.png")}
            className="w-[25px] h-[25px]"
          />
          <Text className="text-[10px] text-white font-interSemiBold">45</Text>
        </View>
        <View className="mb-[20px]">
          <Image
            source={require("@/assets/Icon/revupload.png")}
            className="w-[20px] h-[25px]"
          />
        </View>
      </View>
    </View>
  );
};

export default Reviews;
