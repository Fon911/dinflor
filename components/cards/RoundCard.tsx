// components/cards/RoundCard.tsx

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const RoundCard = ({ text, image }: any) => {
  return (
    // Добавьте TouchableOpacity, чтобы карточка была кликабельной,
    // и установите отступы справа для разделения карточек.
    <TouchableOpacity className="flex flex-col items-center mr-4">
      <View className="w-[90px] h-[90px] rounded-full overflow-hidden border-[1px] border-[#FF4081]">
        <Image source={image} className="w-full h-full" resizeMode="cover" />
      </View>
      <View className="mt-2 w-[90px]">
        <Text
          className="text-[13px] font-interSemiBold text-[#333333] text-center"
          numberOfLines={2}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundCard;
