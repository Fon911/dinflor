import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const ShopCard = ({
  name,
  description,
  image,
  id,
}: {
  name: string;
  description: string;
  image: any;
  id: string;
}) => {
  const images = Array(8).fill(require("@/assets/test/luna.png"));
  const [favorite, setFavorite] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth - 19; // например, с отступами
  const imgWidth = cardWidth / 4;
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/(features)/shops/[id]",
          params: { id: "1" }, // сюда подставляешь нужное значение
        });
      }}
    >
      <View className="bg-[#F3F3F3] overflow-hidden  rounded-xl w-full h-[200px] relative">
        {/* Блок картинок */}
        <View className="flex-wrap flex-row gap-[1px]">
          {Array(8)
            .fill(require("@/assets/test/luna.png"))
            .map((img, i) => (
              <Image
                key={i}
                source={img}
                className="h-[85px]"
                resizeMode="cover"
                style={{ width: imgWidth }}
              />
            ))}
          <View className="absolute top-[134px] left-[7px] w-[183px] h-[45px] border-[1px] border-[#F3F3F3] rounded-xl bg-[#F3F3F3]">
            <View className="flex flex-col  pl-2">
              <Text className="text-[15px] font-interBold text-main-200">
                Luna
              </Text>
              <Text className="text-[10px] font-interLight text-main-200">
                до 90 минут
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center w-full justify-between py-[7px] px-[11px]">
            <View className="flex flex-row items-center">
              <Image
                source={require("@/assets/Icon/star.png")}
                className="w-[12px] h-[12px] mr-[15px]"
                resizeMode="cover"
              />
              <Text className="text-[12px] font-interMedium text-main-200">
                4.87 / 5 · 1 101 138 оценок
              </Text>
            </View>
            <Image
              source={require("@/assets/Icon/love.png")}
              className="w-[16px] h-[15px] mr-[6px]"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopCard;
