import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import CustomButton from "../ui/CustomButton";

const Help = () => {
  return (
    <View className="flex-1">
      <View className="mx-[15px]">
        <View>
          <Text className="text-[16px] font-interSemiBold">
            Защита покупателя
          </Text>
          <Text className="text-[12px] font-interRegular mt-[3px]">
            Если товар не соответствует составу, то вы можете его вернуть или
            получить денежную компенсацию.
          </Text>
          <TouchableOpacity>
            <View className="flex-row items-center mt-[10px]">
              <Image
                source={require("@/assets/Icon/supportpeople.png")}
                className="w-[14px] h-[11px]"
              />
              <Text className="text-[10px] text-[#00000080] font-interMedium">
                Пожаловаться на товар
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-[10px]">
          <Text className="text-[16px] font-interSemiBold">Правила отмены</Text>
          <Text className="text-[12px] font-interRegular mt-[3px]">
            Вы можете бесплатно отменить заказ до начала доставки, деньги
            полностью вам вернутся.
          </Text>
        </View>
        <View className="mt-[15px]">
          <Text className="text-[16px] font-interSemiBold">Задать вопрос</Text>
          <TextInput
            className="w-[345px] mt-[10px] h-[147px] border border-main-100 rounded-lg px-3"
            placeholder="Ваш вопрос"
            scrollEnabled
            textAlignVertical="top"
          />
          <CustomButton
            title="Вопрос по завершенному  заказу"
            onPress={() => {}}
            className="mx-[28px] my-[15px]"
          />
        </View>
      </View>
      <CustomButton
        title="Отправить"
        onPress={() => {}}
        className="mx-[28px] my-[15px] absolute bottom-[15px] w-[172px] right-[29px]"
      />
    </View>
  );
};

export default Help;
