import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: route.name === "reviews" ? "#fff" : "#000",
        tabBarInactiveTintColor:
          route.name === "reviews" ? "#BDBDBD" : "#A4A3A3",
        tabBarStyle: {
          backgroundColor: route.name === "reviews" ? "#1E1E1E" : "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "SemiBold",
        },
      })}
    >
      {/* Товары */}
      <Tabs.Screen
        name="[id]"
        options={{
          title: "Товары",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/serva.png")
                  : require("@/assets/IconTabs/serv.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* О нас */}
      <Tabs.Screen
        name="about"
        options={{
          title: "О нас",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/abouta.png")
                  : require("@/assets/IconTabs/about.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Обзоры */}
      <Tabs.Screen
        name="reviews"
        options={{
          title: "Обзоры",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/reva.png")
                  : require("@/assets/IconTabs/rev.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Написать */}
      <Tabs.Screen
        name="chat"
        options={{
          title: "Написать",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/mesa.png")
                  : require("@/assets/IconTabs/mes.png")
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* Отзывы */}
      <Tabs.Screen
        name="feedback"
        options={{
          title: "Отзывы",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/IconTabs/fba.png")
                  : require("@/assets/IconTabs/fb.png")
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
