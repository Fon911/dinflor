import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: route.name === "reviews" ? "#fff" : "#000",
        tabBarInactiveTintColor: "#A4A3A3",
        tabBarStyle: {
          backgroundColor: route.name === "reviews" ? "#1E1E1E" : "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "SemiBold",
        },
      })}
    >
      <Tabs.Screen
        name="[id]"
        options={{
          title: "Товары",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="inventory-2" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "О нас",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={24}
              color={focused ? "#fff" : color}
              style={{
                backgroundColor: focused ? "#2F2F2F" : "transparent",
                borderRadius: 100,
                padding: 4,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: "Обзоры",
          tabBarIcon: ({ color }) => (
            <Ionicons name="videocam-outline" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Написать",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feedback"
        options={{
          title: "Отзовы",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ellipsis-horizontal-circle-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
