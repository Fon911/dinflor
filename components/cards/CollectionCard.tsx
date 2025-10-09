import React from "react";
import { Image, Text, View } from "react-native";

const CollectionCard = () => {
  return (
    <View className="w-full overflow-hidden mb-[10px]">
      <View className="flex flex-row w-full">
        {/* Левая большая картинка */}
        <Image
          source={require("@/assets/test/luna.png")}
          className="w-[60%] h-[140px] rounded-tl-[10px]"
          resizeMode="cover"
        />

        {/* Правая колонка */}
        <View className="w-[40%]">
          <Image
            source={require("@/assets/test/luna.png")}
            className="w-full h-[70px] rounded-tr-[10px]"
            resizeMode="cover"
          />
          <Image
            source={require("@/assets/test/luna.png")}
            className="w-full h-[70px]"
            resizeMode="cover"
          />
        </View>
      </View>
      <View className="px-[10px] pt-[5px] bg-[#F3F3F3] pb-[20px] rounded-b-[10px] ">
        <Text className=" text-[15px] font-interBold">Подборка № 1</Text>
        <Text className="text-[10px] font-interLight pt-[3px]">14 товаров</Text>
      </View>
    </View>
  );
};

export default CollectionCard;
