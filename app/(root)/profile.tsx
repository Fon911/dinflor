import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const name = "Даниил";

  const router = useRouter();

  // массив пунктов меню
  const menuItems = [
    {
      title: "Бонусная программа",
      icon: require("@/assets/Icon/bonusflower.png"),
      bonus: "100",
      onPress: () => {
        router.push("/(profile)/bonus");
      },
    },
    {
      title: "Заказы",
      onPress: () => {
        router.push("/(profile)/order");
      },
    },
    {
      title: "Лист ожидания",
      onPress: () => {
        router.push("/(profile)/waitlist");
      },
    },
    {
      title: "События",
      onPress: () => {
        router.push("/(profile)/event");
      },
    },

    {
      title: "Помощь",

      onPress: () => {
        router.push("/(profile)/help");
      },
    },
    {
      title: "Правовые документы",
      onPress: () => {
        console.log("Открыть документы");
      },
    },
    {
      title: "О приложении",
      noBorder: true,
      onPress: () => {
        console.log("Открыть о приложении");
      },
    },
  ];

  return (
    <View className="flex-1 bg-[#FFFFFF]">
      {/* верхняя карточка */}
      <View
        style={styles.card}
        className="flex-row justify-between items-center px-[15px] mb-[20px] pb-[10px] pt-[56px]"
      >
        <View>
          <Text className="text-[16px] font-interBold">{name}</Text>
          <TouchableOpacity>
            <Text className="text-[10px] font-interLight">
              Настроить профиль
            </Text>
          </TouchableOpacity>
          <View className="mt-[11px] flex-row items-center">
            <Image
              source={require("@/assets/Icon/star.png")}
              className="w-[12px] h-[12px]"
            />
            <Text className="text-[10px] font-interMedium ml-[3px]">
              4.87 (14 отзывов)
            </Text>
          </View>
        </View>
        <Image
          source={require("@/assets/test/profiletest.png")}
          className="w-[60px] h-[60px] rounded-full"
        />
      </View>

      {/* меню */}
      <View className="flex-col px-[15px]">
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={item.onPress}
            className={`flex-row items-center justify-between w-full pb-[10px] ${
              !item.noBorder ? "border-b-[1px] border-main-100" : ""
            } ${index !== 0 ? "mt-[10px]" : ""}`}
          >
            <Text className="text-[16px] font-interRegular">{item.title}</Text>
            <View className="flex-row items-center">
              {item.icon && (
                <Image
                  source={item.icon}
                  className="w-[19px] h-[19px] mr-[3px]"
                />
              )}
              {item.bonus && (
                <Text className="text-[11px] font-interLight mr-[15px]">
                  {item.bonus}
                </Text>
              )}
              <Image
                source={require("@/assets/Icon/arrow.png")}
                className="w-[10px] h-[5px] -rotate-90"
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
  },
});

export default Profile;
