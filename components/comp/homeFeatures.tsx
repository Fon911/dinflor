import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AllFlowers from "../cards/allflowersTsx";
import FeaturesCard from "../cards/FeaturesCard";
import FlowerCard from "../cards/FlowerCard";
import RoundCard from "../cards/RoundCard";
import ServicesCard from "../cards/ServicesCard";
import ShopCard from "../cards/ShopCard";
import Categorylayout from "../layout/Categorylayout";

const HomeFeatures = () => {
  const featuresData = [
    {
      id: 1,
      title: "Цветы",
      image: require("@/assets/bg/flowers.png"),
      width: 100,
    },
    {
      id: 2,
      title: "Съедобные букеты",
      image: require("@/assets/bg/eatflowers.png"),
      width: 161,
    },
    {
      id: 3,
      title: "Воздушные шары",
      image: require("@/assets/bg/baloons.png"),
      width: 161,
    },
    {
      id: 4,
      title: "Кондитерские и \n пекарни",
      image: require("@/assets/bg/cake.png"),
      width: 171,
    },
    {
      id: 5,
      title: "Подарочные сертификаты",
      image: require("@/assets/bg/gift.png"),
      width: 171,
    },
    {
      id: 6,
      title: "Вкусные наборы",
      image: require("@/assets/bg/tastycombo.png"),
      width: 161,
    },
    {
      id: 7,
      title: "Картины",
      image: require("@/assets/bg/pictures.png"),
      width: 135,
    },
    {
      id: 8,
      title: "Сюрприз",
      image: require("@/assets/bg/surprise.png"),
      width: 161,
    },
  ];

  const rows = [];
  for (let i = 0; i < featuresData.length; i += 4) {
    rows.push(featuresData.slice(i, i + 4));
  }

  const servicesData = [
    {
      id: 1,
      name: "Печать на холстах в Калуге",
      description:
        "Создаём романтику вручную — подберём красивое изображение или используем ваше фото.",
      image: require("@/assets/bg/portrets.png"),
    },
    {
      id: 2,
      name: "Холсты с душой",
      description:
        "Печатаем на холсте в Калуге — по вашему фото или поможем подобрать сюжет.Качественно, быстро, вручную.",
      image: require("@/assets/bg/twopeoplekiss.png"),
    },
  ];

  const roundCardData = [
    {
      id: 1,
      text: "до 2000",
      image: require("@/assets/bg/low2000.png"),
    },
    { id: 2, text: "Маме", image: require("@/assets/bg/mom.png") },
    {
      id: 3,
      text: "На день \nрождения",
      image: require("@/assets/bg/hb.png"),
    },
    { id: 4, text: "Папе", image: require("@/assets/bg/dad.png") },
  ];

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

  const shopData = [
    { id: 1, shopName: "Luna", rating: "4.87", delivery: "до 90 минут" },
    { id: 2, shopName: "Florist", rating: "4.91", delivery: "до 60 минут" },
    { id: 3, shopName: "Sweetie", rating: "4.75", delivery: "до 120 минут" },
    { id: 4, shopName: "Balloonia", rating: "4.89", delivery: "до 30 минут" },
    { id: 5, shopName: "GiftBox", rating: "4.80", delivery: "до 50 минут" },
    { id: 6, shopName: "Masterpiece", rating: "4.95", delivery: "до 75 минут" },
    { id: 7, shopName: "Surprise", rating: "4.82", delivery: "до 100 минут" },
    { id: 8, shopName: "HappyDay", rating: "4.70", delivery: "до 45 минут" },
  ];
  const [selected, setSelected] = useState("Все товары");

  // ГРУППИРУЕМ SHOPDATA ПО 2 ЭЛЕМЕНТА В ВЕРТИКАЛЬНЫЙ СТОЛБЕЦ (2x4 скролл)
  const shopRows = [];
  for (let i = 0; i < shopData.length; i += 2) {
    shopRows.push(shopData.slice(i, i + 2));
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <View className="mt-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            {rows.map((row, rowIndex) => (
              <View key={rowIndex} className="flex flex-row mb-2">
                {row.map((item) => (
                  <FeaturesCard
                    key={item.id}
                    title={item.title}
                    numOfLines={2}
                    imageadress={item.image}
                    width={item.width}
                  />
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View className="mt-4 ">
        <ScrollView
          className="pb-10"
          horizontal
          style={{ paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {servicesData.map((service) => (
            <ServicesCard key={service.id} {...service} />
          ))}
        </ScrollView>
      </View>
      <View className="">
        <Categorylayout rylayout title="ИЩУ ПОДАРОК">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="pt-2"
          >
            {roundCardData.map((item) => (
              <RoundCard key={item.id} text={item.text} image={item.image} />
            ))}
          </ScrollView>
        </Categorylayout>
      </View>
      <View className="">
        <Categorylayout rylayout title="Цветы">
          <View className="flex-row  justify-center">
            {["Все товары", "Магазины"].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelected(tab)}
                activeOpacity={1}
              >
                <View className="items-center mr-[10px]">
                  <Text
                    className={`text-[16px]   uppercase ${
                      selected === tab
                        ? "font-interBold text-main-200"
                        : "font-interLight text-main-200"
                    }`}
                  >
                    {tab}
                  </Text>
                  {selected === tab && (
                    <View className="h-[1px] w-full bg-main-200 mt-1" />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="pt-2"
          >
            {allFlowersData.map((item) => (
              <AllFlowers key={item.id} text={item.text} image={item.image} />
            ))}
          </ScrollView>
        </Categorylayout>
      </View>
      {selected === "Все товары" && (
        <View className="mt-4">
          <Categorylayout rylayout title="ПОПУЛЯРНЫЕ МАГАЗИНЫ">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingTop: 10 }}
            >
              {shopRows.map((column, columnIndex) => (
                <View
                  key={columnIndex}
                  className="flex-col justify-between w-[200px] mr-4"
                >
                  {column.map((flower) => (
                    <View key={flower.id} className="mb-4">
                      <FlowerCard
                      // Передайте пропсы, если ShopCard их принимает
                      />
                    </View>
                  ))}
                </View>
              ))}
            </ScrollView>
          </Categorylayout>
        </View>
      )}
      {selected === "Магазины" && (
        <View className="mt-4">
          <Categorylayout rylayout title="ВСЕ МАГАЗИНЫ">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingTop: 10 }}
            >
              {shopData.map((shop) => (
                <View key={shop.id} className="mb-4 mr-[6px] items-center">
                  <ShopCard
                    name={shop.shopName}
                    rating={shop.rating}
                    delivery={shop.delivery}
                    className="self-center"
                  />
                </View>
              ))}
            </ScrollView>
          </Categorylayout>
        </View>
      )}
    </ScrollView>
  );
};

export default HomeFeatures;
