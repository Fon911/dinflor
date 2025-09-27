import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
// Импортируйте иконки, если вы используете @expo/vector-icons или другие библиотеки.
// Для примера я буду использовать заглушки или Unicode символы.
import { useRouter } from "expo-router";

const FlowerCard = ({
  name,
  image,
  smallImage1,
  smallImage2,
}: {
  name: string;
  image: string;
  smallImage1: string;
  smallImage2: string;
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/(features)/products/[id]",
          params: { id: "1" }, // сюда подставляешь нужное значение
        });
      }}
    >
      <View className="w-[198px] h-[200px] bg-[#F3F3F3] rounded-xl overflow-hidden">
        {/* Блок с изображениями */}
        <View className="flex-row h-[127px]">
          {/* Левое, большое изображение */}
          <View className="w-[130px] h-full pr-[1px]">
            <Image
              source={require("@/assets/test/luna.png")}
              className="w-full h-full rounded-tl-xl"
              resizeMode="cover"
            />
          </View>

          {/* Правый блок с двумя маленькими изображениями */}
          <View className="w-[67px] h-[127px] pl-[1px] flex-col justify-between">
            <View className="h-1/2 ">
              <Image
                source={require("@/assets/test/luna.png")}
                className="w-full h-full rounded-tr-xl"
                resizeMode="cover"
              />
            </View>
            <View className="h-1/2 pt-0.5">
              <Image
                source={require("@/assets/test/luna.png")}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        {/* Блок с информацией и сердечком */}
        <View className="p-[10px] flex-col">
          {/* Название и кнопка "Избранное" */}
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-[15px] font-interBold text-main-200">
              Luna
            </Text>
            <TouchableOpacity className="p-1">
              {/* Иконка "Сердечко" */}
              <Image
                source={require("@/assets/Icon/love.png")}
                className="w-[18px] h-[17px]"
              />
            </TouchableOpacity>
          </View>

          {/* Время доставки */}
          <Text className="text-[10px] font-interLight text-main-200  mb-1">
            до 90 минут
          </Text>

          {/* Рейтинг */}
          <View className="flex-row items-center">
            {/* Звезда */}
            <Image
              source={require("@/assets/Icon/star.png")}
              className="w-[12px] h-[12px] mr-[2px]"
            />
            <Text className="text-[10px] font-interMedium text-main-200 mr-[2px]">
              4.87 / 5
            </Text>
            <Text className="text-[10px] font-interMedium text-main-200">
              • 1 101 138 оценок
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlowerCard;
