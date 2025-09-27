import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const HomeAdress = ({
  bonusCount,
  address,
  street,
  isOpen,
  toggleAddress,
}: any) => {
  return (
    <View className="mt-[56px] mr-[10px]">
      <View className="flex flex-row items-center justify-between">
        {/* Бонусы */}
        <TouchableOpacity>
          <View className="flex flex-row items-center border-[1px] mr-[10px] border-main-100 rounded-[12px] px-[12px] py-[2px]">
            <Image
              source={require("@/assets/Icon/flower.png")}
              className="w-[13px] h-[20px] mr-[20px]"
            />
            <View>
              <Text className="text-[10px] font-interRegular text-main-200">
                Бонусы
              </Text>
              <Text className="text-[12px] font-interMedium text-main-200">
                {bonusCount}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Адрес */}
        <TouchableOpacity onPress={toggleAddress} activeOpacity={1}>
          <View className="flex flex-col  w-[150px]">
            <Text
              className="text-[10px] font-interRegular text-main-200"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Адрес: {address}
            </Text>
            <View className="flex flex-row items-center">
              <Text
                className="text-[12px] font-interMedium text-main-200 flex-1"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {street}
              </Text>

              <Image
                source={require("@/assets/Icon/arrow.png")}
                className={`w-[10px] h-[5px] ml-[5px] ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Иконка справа */}
        <TouchableOpacity className="pl-[64px]">
          <Image
            source={require("@/assets/Icon/Group.png")}
            className="w-[17px] h-[20px]"
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center mt-[10px] justify-between">
        {/* Поисковая строка */}
        <View className="flex flex-row items-center bg-[#F3F3F3] px-[15px] rounded-[5px] flex-1 ">
          <Image
            source={require("@/assets/Icon/search.png")}
            className="w-[13px] h-[13px] mr-[10px]"
          />
          <TextInput
            placeholder="Поиск товаров"
            placeholderTextColor="#A4A3A3"
            className="text-[15px] font-interRegular pb-[2px] flex-1 text-main-200"
            style={{
              paddingVertical: 0,
              height: 28,
            }}
          />
        </View>

        {/* Кнопка справа */}
        <TouchableOpacity className="ml-[10px]">
          <Image
            source={require("@/assets/Icon/filter.png")}
            className="w-[28px] h-[28px]"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeAdress;
