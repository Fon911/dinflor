// components/cards/RoundCard.tsx

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const AllFlowers = ({ text, image }: any) => {
  return (
    // Добавьте TouchableOpacity, чтобы карточка была кликабельной,
    // и установите отступы справа для разделения карточек.
    <TouchableOpacity className="flex flex-col items-center mr-[5px]">
      <View className="w-[70px] h-[70px] ">
        <Image
          source={image}
          className="w-[70px] h-[70px]"
          resizeMode="cover"
        />
      </View>
      <View className="mt-2 w-[70px]">
        <Text
          className="text-[12px] font-interMedium text-[#333333] text-center"
          numberOfLines={2}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AllFlowers;
