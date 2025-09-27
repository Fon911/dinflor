import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ShopServicesCard = () => {
  return (
    <View className="  flex-row items-center">
      <View className="flex flex-row items-center px-[7px] py-[11px] border border-main-100 rounded-xl">
        <Image
          source={require("@/assets/test/testshop.png")}
          className="w-[48px] h-[48px] mr-2"
          resizeMode="contain"
        />
        <View className="max-w-[131px] ">
          <Text className="text-[15px] font-interBold text-main-200">
            Цветы с Любовью
          </Text>
          <View className="flex flex-row items-center">
            <Text className="text-[12px] font-interRegular text-main-200">
              Магазин ·
            </Text>
            <Image
              source={require("@/assets/Icon/star.png")}
              className="w-[10px] h-[10px] ml-[5px]"
            />
            <Text className="text-[12px] font-interRegular text-main-200">
              4.9
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center">
          <TouchableOpacity>
            <Image
              source={require("@/assets/Icon/shoparrow.png")}
              className="w-[13px] h-[26px] "
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShopServicesCard;
