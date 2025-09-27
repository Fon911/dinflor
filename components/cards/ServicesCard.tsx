import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ServicesCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: any;
}) => {
  return (
    <View
      className="w-[255px] h-[122px] rounded-[10px] p-2 flex-row   mr-[10px] bg-white"
      style={{
        shadowColor: "#000040", // сам цвет тени
        shadowOffset: { width: 0, height: 4 }, // 0px 4px
        shadowOpacity: 0.25, // прозрачность (0.25 ≈ #00000040)
        shadowRadius: 4, // размытие
        elevation: 4, // для Android
      }}
    >
      {/* Левая часть */}
      <View className="w-[140px] justify-between pr-2">
        <View>
          <Text className="text-[12px] font-interBold text-main-200 mb-1">
            {name}
          </Text>
          <Text
            className="text-[8px] font-interSemiBold text-main-200"
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        </View>

        {/* Обычная кнопка снизу */}
        <TouchableOpacity className="w-[113px] h-[22px] bg-main-100 rounded-[5px] items-center justify-center mt-2">
          <Text className="text-[8px] font-interSemiBold text-white">
            Узнать подробнее
          </Text>
        </TouchableOpacity>
      </View>

      {/* Правая часть — картинка + стеклянная кнопка */}
      <View className="w-[100px] h-full relative overflow-hidden rounded-[8px] items-center justify-center">
        <Image
          source={image}
          className="w-[83.18px] h-[83.18px]"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ServicesCard;
