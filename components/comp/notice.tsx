import React from "react";
import { ScrollView, View } from "react-native";
import Chatprev from "../ui/chatprev";

const Notice = () => {
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
    {
      sender: "Напоминание о событии",
      time: "18:10",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
    },
    {
      sender: "Напоминание о событии",
      time: "19:45",
      avatar: require("@/assets/test/chat.png"),
      message: "У вашего контакта Мама Скоро день рождение, заходите...",
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="mx-[15px] mt-[20px]"
        showsVerticalScrollIndicator={false}
      >
        {chats.map((chat, index) => (
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

export default Notice;
