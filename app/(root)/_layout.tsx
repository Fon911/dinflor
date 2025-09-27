import { Ionicons } from "@expo/vector-icons"; // иконки из Expo
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#A4A3A3",

        tabBarStyle: {
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "SemiBold",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Главная",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Подборки",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Корзина",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Сообщения",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
