import { useNavigationState } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FlowerServicesCard from "../cards/FlowerServicesCard";
import ShopServicesCard from "../cards/ShopServicesCard";
import AltCategory from "../layout/altCategory";
import CustomerReviews from "../modules/CustomerReviews";
import FlowerSpin from "../modules/FlowerSpin";
import Tag from "../modules/Tag";

const FlowerServices = () => {
  const router = useRouter();
  const routesCount = useNavigationState((state) => state.routes.length);

  const handleClose = () => {
    if (routesCount > 1) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  const items =
    "Эвкалипт - 1 шт. Атласная лента - 1 шт. французская роза розовая - 5 шт. матовая пленка - 1 шт"
      .split(".")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

  const HaveDiscount = true;
  const discount = 3990;
  const price = 5990;
  const name =
    "Нежно Розовый букет из Французских Роз 11 шт. Букет F146 Звездопад";

  return (
    <View className="flex bg-white">
      {/* Контент */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }} // чтобы кнопки не перекрывали текст
      >
        <View className="flex bg-white">
          {/* Верхняя панель */}
          <View className="flex flex-row items-center justify-between px-4 absolute top-8 left-0 right-0 z-10">
            {/* Левая кнопка (назад) */}
            <TouchableOpacity onPress={handleClose}>
              <Image
                source={require("@/assets/Icon/BackArrow.png")}
                className="w-[30px] h-[30px]"
              />
            </TouchableOpacity>

            {/* Правая часть (upload и love) */}
            <View className="flex flex-row items-center ">
              <TouchableOpacity>
                <Image
                  source={require("@/assets/Icon/upload.png")}
                  className="w-[24px] h-[30px] mr-[30px]"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/Icon/loveforservices.png")}
                  className="w-[34px] h-[30px] pr-[1px]"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Контент */}
          <FlowerSpin />
          <View className="ml-[10px] mt-[10px]">
            {HaveDiscount ? (
              <View className="flex flex-row items-center gap-[10px]">
                <Text className="text-[16px] font-InterRegular line-through text-main-200 ">
                  {price}₽
                </Text>
                <Text className="text-[24px] font-interSemiBold text-main-100">
                  {discount}₽
                </Text>
              </View>
            ) : (
              <Text>{price}₽</Text>
            )}

            <View className="flex flex-row items-center gap-[10px]">
              <FlatList
                data={["Новинка", "ХИТ"]}
                renderItem={({ item }) => <Tag title={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View className=" mt-[10px] max-w-[333px]">
              <Text className="text-[20px] font-interSemiBold text-main-200">
                {name}
              </Text>
            </View>
            <View className="flex flex-row items-center mt-[10px]">
              <Image
                source={require("@/assets/Icon/star.png")}
                className="w-[16px] h-[16px] mr-[5px]"
              />
              <Text className="text-[14px] font-interMedium text-main-200">
                4.87 / 5 · 10 138 оценок
              </Text>
            </View>
            <View className="mt-[10px] self-start">
              <ShopServicesCard />
            </View>

            <View className="mt-[10px]">
              <Text className="text-[20px] font-interBold text-main-100">
                Состав
              </Text>
              {items.map((item, index) => (
                <Text
                  key={index}
                  className="text-main-200 text-[16px] font-interRegular "
                >
                  {item}
                </Text>
              ))}
            </View>
            <View>
              <Text className="text-[20px] font-interBold text-main-100">
                Описание
              </Text>
              <Text className="text-main-200 text-[16px] font-interRegular ">
                Объемный нежный букет из белых и розовых французских вывернутых
                роз с эвкалиптом! Такой букет обязательно произведет
                впечатление! Цветовая палитра – это деликатное сочетание белого
                и розового. Белые розы символизируют чистоту, невинность и новое
                начало, а нежно-розовые добавляют нотку романтики, благодарности
                и восхищения.
              </Text>
            </View>
            <AltCategory title="Отзывы покупателей" className="mr-[10px]">
              <CustomerReviews />
            </AltCategory>
            <AltCategory title="Похожие товары" className="mr-[10px]">
              <View className="flex-row flex-wrap justify-between">
                {Array.from({ length: 12 }).map((_, index) => (
                  <View key={index} className=" mr-[5px] mb-[16px]">
                    <FlowerServicesCard />
                  </View>
                ))}
              </View>
            </AltCategory>
          </View>
        </View>
      </ScrollView>

      {/* Фиксированные кнопки */}
      <View className="absolute bottom-10 left-0 right-0 flex flex-row items-center gap-[10px] px-[10px] py-[8px]  ">
        <TouchableOpacity className="flex-1 bg-main-100 border border-main-100 px-[11px] py-[11.5px] rounded-[12px]">
          <Text
            className="text-white text-[14px] font-interSemiBold text-center"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Добавить в корзину
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-[#FFFFFF] border border-main-100 px-[11px] py-[11.5px] rounded-[12px]">
          <Text className="text-[14px] font-interSemiBold text-center">
            Купить сейчас
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlowerServices;
