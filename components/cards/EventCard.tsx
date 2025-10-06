import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const EventCard = ({ celebrant, date, event }: any) => {
  return (
    <View
      className="mb-[10px] rounded-[12px]"
      style={{
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          },
          android: {
            elevation: 4,
          },
        }),
      }}
    >
      {/* Внутренний блок с фоном и overflow-hidden */}
      <View className="flex flex-col rounded-[12px] bg-white overflow-hidden relative">
        {/* Полоска слева */}
        <View className="absolute left-0 top-0 bottom-0 w-[4px] bg-main-100" />

        <View className="pl-[20px] pt-[4px] pb-[16px]">
          <Text className="text-[#A4A3A3] font-interRegular text-[10px]">
            Событие
          </Text>
          <Text className="text-main-200 text-[15px] mt-[5px] font-interBold">
            {celebrant}
          </Text>

          <View className="mt-[5px] flex flex-row gap-[5px]">
            <Text className="text-main-200 text-[12px] font-interRegular">
              {date}
            </Text>
            <Text className="text-main-200 text-[12px] font-interRegular">
              {event}
            </Text>
          </View>

          <TouchableOpacity className="mt-[5px]">
            <Text className="text-main-100 text-[14px] font-interMedium">
              Выбрать подарок
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
