import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CollectionCard from "../cards/CollectionCard";

const Collection = () => {
  const [activeTab, setActiveTab] = useState<"all" | "popular" | "new">("all");

  const tabs = [
    { key: "all", label: "Все" },
    { key: "popular", label: "Популярные" },
    { key: "new", label: "Новые" },
  ];

  const tabCards = {
    all: 3,
    popular: 4,
    new: 2,
  };

  return (
    <View className="flex-1 pt-[61px] px-[15px] bg-white">
      {/* Заголовок */}
      <View className="flex-row items-center justify-between mb-[15px]">
        <Text className="text-[16px] font-interBold">Подборки</Text>
        <View className="p-[7px] bg-[#F3F3F3] rounded-[5px]">
          <Image
            source={require("@/assets/Icon/plus.png")}
            className="h-[14px] w-[14px]"
          />
        </View>
      </View>

      {/* Вкладки */}
      <View className="relative mx-[15px] mb-[10px]">
        <View className="flex flex-row items-center border-[#E5E5E5]">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key as any)}
              activeOpacity={1}
              className={`border-b-[1px] relative z-50 pb-[6px] ${
                activeTab === tab.key
                  ? "border-[#FF3C8B]"
                  : "border-transparent"
              } ${tab.key !== "all" ? "ml-[23px]" : ""}`}
            >
              <Text
                className={`font-interRegular text-[16px] ${
                  activeTab === tab.key ? "text-[#FF3C8B]" : "text-main-200"
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="w-full h-[1px] bg-[#E5E5E5] absolute bottom-[0px] z-0" />
      </View>

      {/* Контент вкладок */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {Array.from({ length: tabCards[activeTab] }).map((_, index) => (
          <View key={index} className="mb-[10px]">
            <CollectionCard />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Collection;
