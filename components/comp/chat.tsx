import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Chatprev from "../ui/chatprev";

const Chat = () => {
  const chats = [
    {
      sender: "Напоминание о событии",
      time: "10:32",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
    },
    {
      sender: "Поддержка Luna",
      time: "09:15",
      avatar: require("@/assets/test/chat2.png"),
      message: "Здравствуйте, благодарим вас за заказ в нашем магазине...",
    },
    {
      sender: "Напоминание о событии",
      time: "Вчера",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
    },
    {
      sender: "Поддержка Luna",
      time: "08:50",
      avatar: require("@/assets/test/chat2.png"),
      message: "Здравствуйте, благодарим вас за заказ в нашем магазине...",
    },
    {
      sender: "Напоминание о событии",
      time: "09:00",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
    },
    {
      sender: "Поддержка Luna",
      time: "11:12",
      avatar: require("@/assets/test/chat2.png"),
      message: "Здравствуйте, благодарим вас за заказ в нашем магазине...",
    },
    {
      sender: "Напоминание о событии",
      time: "13:05",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
    },
    {
      sender: "Поддержка Luna",
      time: "15:42",
      avatar: require("@/assets/test/chat2.png"),
      message: "Здравствуйте, благодарим вас за заказ в нашем магазине...",
    },

    // 🗂 Архивные сообщения:
    {
      sender: "Напоминание о событии",
      time: "13:05",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
      archived: true,
    },
    {
      sender: "Поддержка Luna",
      time: "15:42",
      avatar: require("@/assets/test/chat2.png"),
      message: "Здравствуйте, благодарим вас за заказ в нашем магазине...",
      archived: true,
    },
    {
      sender: "Поддержка Luna",
      time: "15:42",
      avatar: require("@/assets/test/chat2.png"),
      message: "Здравствуйте, благодарим вас за заказ в нашем магазине...",
    },
    {
      sender: "Напоминание о событии",
      time: "13:05",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
      archived: true,
    },
  ];

  const [activeTab, setActiveTab] = useState<"current" | "completed">(
    "current"
  );

  const filteredChats =
    activeTab === "current"
      ? chats.filter((_, i) => i < 8)
      : chats.filter((c) => c.archived);

  return (
    <View className="flex-1 bg-white mx-[15px] mt-[56px] relative">
      <Text className="text-[16px] font-interBold text-main-200">Входящие</Text>

      <View className="relative mt-[10px]">
        <View className="flex flex-row items-center border-[#E5E5E5]">
          <TouchableOpacity
            onPress={() => setActiveTab("current")}
            activeOpacity={1}
            className={`border-b-[1px] relative z-50 ${
              activeTab === "current" ? "border-main-100" : "border-transparent"
            }`}
          >
            <Text className="font-interRegular text-[10px] text-main-200">
              Сообщения
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
            <Text className="font-interRegular text-[10px] text-main-200">
              Архив
            </Text>
          </TouchableOpacity>
        </View>

        <View className="w-full h-[1px] bg-[#E5E5E5] absolute bottom-[0px] z-0" />
      </View>

      <ScrollView className="mt-[20px]" showsVerticalScrollIndicator={false}>
        {filteredChats.map((chat, index) => (
          <View key={index} className="mb-[15px]">
            <Chatprev
              time={chat.time}
              sender={chat.sender}
              avatar={chat.avatar}
              message={chat.message}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chat;
