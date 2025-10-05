import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import OrderCard from "../cards/OrderCard";
import CustomButton from "../ui/CustomButton";

const Order = () => {
  const [activeTab, setActiveTab] = useState<"current" | "completed">(
    "current"
  );
  const ordercount = 0;

  return (
    <View className="flex-1 bg-white ">
      {/* Вкладки */}
      <View className="relative mx-[15px]">
        <View className="flex flex-row items-center border-[#E5E5E5]">
          <TouchableOpacity
            onPress={() => setActiveTab("current")}
            activeOpacity={1}
            className={`border-b-[1px] relative z-50 ${
              activeTab === "current" ? "border-main-100" : "border-transparent"
            }`}
          >
            <Text className="font-interRegular text-[16px] text-main-200">
              Текущие
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("completed")}
            activeOpacity={1}
            className={`border-b-[1px] ml-[23px] relative z-50 ${
              activeTab === "completed"
                ? "border-main-100"
                : "border-transparent"
            }`}
          >
            <Text className="font-interRegular text-[16px] text-main-200">
              Завершенные
            </Text>
          </TouchableOpacity>
        </View>

        <View className="w-full h-[1px] bg-[#E5E5E5] absolute bottom-[0px] z-0" />
      </View>

      {/* Контент */}
      {ordercount > 0 ? (
        <ScrollView className="flex-1 gap-[20px] mt-[10px]">
          {activeTab === "current" && (
            <View className="flex flex-col gap-[20px]">
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </View>
          )}
          {activeTab === "completed" && (
            <View className="flex flex-col gap-[20px]">
              <OrderCard />
              <OrderCard />
            </View>
          )}
        </ScrollView>
      ) : (
        <View className="flex-1">
          <Text className="text-[13px] font-interRegular mt-[20px] mx-[15px] text-main-200 text-center">
            У вас пока нет текущих заказов. Если вам нужна помощь, то мы готовы
            вам помочь
          </Text>
          <Image
            source={require("@/assets/image/noOrderImage.png")}
            className="w-full h-[290px]"
            resizeMode="contain"
          />
          <CustomButton
            title="Перейти к товарам"
            onPress={() => {
              router.push("/");
            }}
            className="mt-[20px] w-[203px] self-center"
          />
        </View>
      )}
    </View>
  );
};

export default Order;
