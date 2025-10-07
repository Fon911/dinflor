import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Chatprev = ({
  time,
  sender,
  avatar,
  message,
}: {
  time: string;
  sender: string;
  avatar: string;
  message: string;
}) => {
  return (
    <TouchableOpacity className="flex-row items-center">
      <Image source={avatar} className="w-[42px] h-[42px] rounded-[5px]" />

      {/* Контейнер для текста */}
      <View className="flex-1 ml-[10px]">
        <View className="flex-row items-center justify-between">
          <Text className="text-[15px] font-interMedium text-main-200">
            {sender}
          </Text>
          <Text className="text-[10px] font-interLight text-main-200">
            {time}
          </Text>
        </View>

        <Text
          className="text-[10px] font-interLight text-main-200 mt-[5px]"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chatprev;
