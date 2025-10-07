import React from "react";
import { Text, View } from "react-native";
import ShopInfoCard from "../cards/ShopInfoCard";
import AltCategory from "../layout/altCategory";

const about = () => {
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
  return (
    <View className="flex-1 mx-[10px]">
      <AltCategory title="Описание">
        <Text className="text-[16px] font-interLight text-main-200">
          Цветочная студия Luna - это про красоту и нежность в каждом
          цветке.Эксклюзивные сборные и моно-букеты ,цветочные композиции в
          коробках и корзинах , широкий ассортимент мягких игрушек.
        </Text>
      </AltCategory>
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
      <AltCategory title="Контакт">
        <Text className="text-[16px] font-interLight text-main-200">
          Адрес магазина: Калуга
        </Text>
        <Text className="text-[16px] font-interMedium text-main-200">
          ул. Маршала Жукова, 22
        </Text>
        <Text className="text-[11px] font-interLight text-main-200">
          ул. Маршала Жукова, 22
        </Text>
        <Text className="text-[11px] font-interLight text-main-200">
          пн-вс: с 9:00 до 20:00
        </Text>
      </AltCategory>
      <AltCategory title="Юр.данные">
        <Text className="text-[16px] font-interMedium text-main-200">
          ИП Курилов Даниил Иванович
        </Text>
        <Text className="text-[16px] font-interMedium text-main-200">
          ОГРНИП 311400411111325
        </Text>
      </AltCategory>
    </View>
  );
};

export default about;
