import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const WaitCard = () => {
  return (
    <View className="w-[169px] flex-col items-center">
      {/* Картинка с верхними скруглениями */}
      <View className="relative w-[169px] h-[158px]">
        <Image
          source={require("../../assets/test/luna.png")}
          className="w-full h-full rounded-t-[10px]"
        />
        <Image
          source={require("../../assets/Icon/love.png")}
          className="w-[17px] h-[16px] absolute top-[10px] right-[10px]"
        />
      </View>

      {/* Нижняя часть с бордером только снизу и по бокам */}
      <View className="w-[169px] border border-t-0 border-main-100 rounded-b-[10px] ">
        <View className="flex flex-col items-center mb-[4px]">
          <Text className="text-[10px] font-interBold text-main-200">
            Звездопад
          </Text>
          <Text className="text-[10px] font-interLight text-center text-main-200">
            Сияющая композиция, наполненная яркими акцентами
          </Text>
        </View>
        <View className="flex flex-row items-center gap-[12px] justify-center mb-[9px]">
          <TouchableOpacity className="bg-main-200 px-[14px] py-[5px] rounded-[5px] ">
            <Text className="text-[12px] font-interRegular text-white">
              Отписаться от товара
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WaitCard;
