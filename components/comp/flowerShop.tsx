import { useNavigationState } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AllFlowers from "../cards/allflowersTsx";
import FlowerServicesCard from "../cards/FlowerServicesCard";
import ShopInfoCard from "../cards/ShopInfoCard";
import AltCategory from "../layout/altCategory";

const flowerShop = () => {
  const router = useRouter();
  const routesCount = useNavigationState((state) => state.routes.length);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleAddress = () => setIsOpen(!isOpen);

  const handleClose = () => {
    if (routesCount > 1) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  const allFlowersData = [
    {
      id: 1,
      text: "Цветы поштучно",
      image: require("@/assets/bg/flowersone.png"),
    },
    {
      id: 2,
      text: "Цветы в корзине",
      image: require("@/assets/bg/flowersbackets.png"),
    },
    {
      id: 3,
      text: "Авторские букеты",
      image: require("@/assets/bg/manyflowers.png"),
    },
    {
      id: 4,
      text: "Цветы для интерьера",
      image: require("@/assets/bg/flowersinglass.png"),
    },
    {
      id: 5,
      text: "Подарочные наборы",
      image: require("@/assets/bg/flowersgift.png"),
    },
    {
      id: 6,
      text: "Цветы в коробке",
      image: require("@/assets/bg/flowersbox.png"),
    },
    {
      id: 7,
      text: "Букеты из сухоцветов",
      image: require("@/assets/bg/desertflowers.png"),
    },
    {
      id: 8,
      text: "Цветы в ящиках",
      image: require("@/assets/bg/flowersinboxes.png"),
    },
    {
      id: 9,
      text: "Букет невесты",
      image: require("@/assets/bg/flowersforbride.png"),
    },
    {
      id: 10,
      text: "Стабилиз. цветы",
      image: require("@/assets/bg/stabilizedflowers.png"),
    },
    {
      id: 11,
      text: "Мягкие игрушки",
      image: require("@/assets/bg/softtoys.png"),
    },
    {
      id: 12,
      text: "Букет из мыла",
      image: require("@/assets/bg/flowerssoap.png"),
    },
    {
      id: 13,
      text: "Монобукет",
      image: require("@/assets/bg/manoflowers.png"),
    },
    {
      id: 14,
      text: "Открытки",
      image: require("@/assets/bg/flowersopen.png"),
    },
    {
      id: 15,
      text: "Смотреть все",
      image: require("@/assets/bg/lookall.png"),
    },
  ];

  const characteristics = [
    {
      sum: "Супермагазин",
      name: "уровень магазина",
      textColor: "text-main-100",
      icon: require("@/assets/Icon/cup.png"),
    },
    {
      sum: "122 043",
      name: "товаров продано",
      textColor: "text-main-200",
      icon: require("@/assets/Icon/like.png"),
    },
    {
      sum: "98%",
      name: "заказов вовремя",
      textColor: "text-[#639345]",
      icon: require("@/assets/Icon/sellsintime.png"),
    },
    {
      name: "на площадке",
      sum: "2 года 1 месяц",
      textColor: "text-main-200",
      icon: require("@/assets/Icon/shop.png"),
    },
  ];
  const [active, setActive] = useState<"delivery" | "pickup">("delivery");

  const address = "Калуга область, деревня Новая-Пушкино"; // специально длинный
  const street = "ул. Пушкинская, д. 123, 12312"; // тоже длинный

  return (
    <ScrollView className=" bg-white w-full h-full">
      <View
        className="flex flex-row items-center justify-between mt-[56px] mx-[10px]"
        style={{ paddingBottom: 100 }}
      >
        <View>
          <View className="flex flex-row items-center justify-between gap-[34px] mx-[5px] mb-[10px]">
            <TouchableOpacity onPress={handleClose} className="]">
              <Image
                source={require("@/assets/Icon/BackArrow.png")}
                className="w-[30px] h-[30px]"
              />
            </TouchableOpacity>

            {/* Адрес */}
            <TouchableOpacity onPress={toggleAddress} activeOpacity={1}>
              <View className="flex flex-col  w-[150px]">
                <Text
                  className="text-[10px] font-interRegular text-main-200"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Адрес: {address}
                </Text>
                <View className="flex flex-row items-center">
                  <Text
                    className="text-[12px] font-interMedium text-main-200 flex-1"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {street}
                  </Text>

                  <Image
                    source={require("@/assets/Icon/arrow.png")}
                    className={`w-[10px] h-[5px] ml-[5px] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* Иконка справа */}
            <View className=" gap-[15px] flex flex-row items-center">
              <TouchableOpacity>
                <Image
                  source={require("@/assets/Icon/searchmain100.png")}
                  className="w-[20px] h-[20px]"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/Icon/upload.png")}
                  className="w-[16px] h-[20px]"
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/Icon/lovelight.png")}
                  className="w-[20px] h-[20px]"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-[33px] mb-[10px]">
            <View className="flex flex-row items-center mb-[10px]">
              <Text className="font-interBold text-[24px] mr-[10px]">Luna</Text>
              <Image
                source={require("@/assets/Icon/about.png")}
                className="w-[15px] h-[15px]"
              />
            </View>
            <View className="flex flex-row items-center">
              <Image
                source={require("@/assets/Icon/star.png")}
                className="w-[16px] h-[16px] mr-[5px]"
              />
              <Text className="font-interMedium text-[12px] text-main-200">
                4.87 / 5 · 1 101 138 оценок
              </Text>
            </View>
          </View>
          <View className="flex flex-row flex-wrap justify-between">
            {characteristics.map((characteristic, index) => (
              <View key={index} className="w-[48%] mb-4">
                <ShopInfoCard
                  textColor={characteristic.textColor}
                  icon={characteristic.icon}
                  CharacteristicsSum={characteristic.sum}
                  CharacteristicsName={characteristic.name}
                />
              </View>
            ))}
          </View>
          <View>
            <AltCategory
              title="Описание"
              className="items-center justify-center"
            >
              <Text className="text-[16px] font-interLight text-main-200">
                Цветочная студия Luna - это про красоту и нежность в каждом
                цветке.Эксклюзивные сборные и моно-букеты ,цветочные композиции
                в коробках и корзинах , широкий ассортимент мягких игрушек.
              </Text>
              <View className="w-full items-center mt-4">
                <View className="flex-row border border-main-200 h-[27px] w-[300px] items-center rounded-md overflow-hidden">
                  {/* Доставка */}
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setActive("delivery")}
                    className={`flex-1 py-[2px] items-center ${
                      active === "delivery" ? "bg-main-200" : "bg-white"
                    }`}
                  >
                    <Text
                      className={`text-[15px] font-interMedium ${
                        active === "delivery" ? "text-white" : "text-main-200"
                      }`}
                    >
                      Доставка
                    </Text>
                  </TouchableOpacity>

                  {/* Самовывоз */}
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setActive("pickup")}
                    className={`flex-1 py-[2px] items-center ${
                      active === "pickup" ? "bg-main-200" : "bg-white"
                    }`}
                  >
                    <Text
                      className={`text-[15px] font-interMedium ${
                        active === "pickup" ? "text-white" : "text-main-200"
                      }`}
                    >
                      Самовывоз
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </AltCategory>
          </View>
          <View>
            <AltCategory
              title="Товары магазина"
              className="items-center justify-center"
            >
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pt-2"
              >
                {allFlowersData.map((item) => (
                  <AllFlowers
                    key={item.id}
                    text={item.text}
                    image={item.image}
                  />
                ))}
              </ScrollView>
            </AltCategory>
          </View>
          <View>
            <View className="flex-row flex-wrap justify-between">
              {Array.from({ length: 12 }).map((_, index) => (
                <View key={index} className=" mb-[16px]">
                  <FlowerServicesCard />
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default flowerShop;
