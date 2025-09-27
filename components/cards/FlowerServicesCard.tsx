import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const FlowerServicesCard = () => {
  return (
    <View className="flex w-[169px] flex-col items-center">
      <Image
        source={require("../../assets/test/luna.png")}
        className="w-[169px] h-[158px] rounded-t-[10px]  "
      />
      <Image
        source={require("../../assets/Icon/love.png")}
        className="w-[17px] h-[16px] absolute top-[10px] right-[10px]  "
      />
      <View className="flex flex-col justify-center text-center items-center">
        <Text className="text-[10px] font-interBold text-main-200">
          Звездопад
        </Text>
        <Text className="text-[10px] font-interLight text-center text-main-200">
          Сияющая композиция, наполненная яркими акцентамиопад
        </Text>
      </View>
      <View className="flex flex-row items-center gap-[12px]">
        <Text className="text-[12px] font-interBold text-main-100">5990₽</Text>
        <TouchableOpacity className="bg-main-200 px-[14px] py-[5px] rounded-[5px]">
          <Text className="text-[12px] font-interRegular text-white">
            Заказать
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlowerServicesCard;
