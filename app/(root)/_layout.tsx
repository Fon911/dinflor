import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

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
      {/* Главная */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Главная",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/homea.png")
                  : require("@/assets/IconTabs/home.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Подборки */}
      <Tabs.Screen
        name="collections"
        options={{
          title: "Подборки",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/cola.png")
                  : require("@/assets/IconTabs/col.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Корзина */}
      <Tabs.Screen
        name="order"
        options={{
          title: "Корзина",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/order.png")
                  : require("@/assets/IconTabs/order.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Сообщения */}
      <Tabs.Screen
        name="chat"
        options={{
          title: "Сообщения",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/messagea.png")
                  : require("@/assets/IconTabs/message.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Профиль */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/profilea.png")
                  : require("@/assets/IconTabs/profile.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
