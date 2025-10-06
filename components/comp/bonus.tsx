import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "../ui/CustomButton";

const Bonus = () => {
  const bonusData = [
    { range: "От 0 до 14 999 ₽", percent: "1%" },
    { range: "От 15 000 ₽", percent: "3%" },
    { range: "От 30 000 ₽", percent: "4%" },
    { range: "От 50 000 ₽", percent: "5%" },
    { range: "От 100 000 ₽", percent: "6%" },
    { range: "От 150 000 ₽", percent: "7%" },
    { range: "От 250 000 ₽", percent: "10%" },
  ];

  return (
    <View className="mx-[10px] flex-1">
      {/* Верхний блок */}
      <View className="flex-row items-center bg-[#FF3C8B26] rounded-[12px] px-[7px] py-[10px] mb-[20px]">
        <Image
          source={require("@/assets/image/bonusprogramm.png")}
          className="w-[60px] h-[60px] mr-[10px]"
          resizeMode="contain"
        />
        <View className="flex-1">
          <Text className="text-[16px] font-interBold mb-[5px]">
            Экономьте на будущих покупках
          </Text>
          <Text className="text-[13px] font-interRegular leading-[16px]">
            Активируйте программу лояльности, чтобы получить бонусы за заказы и
            использовать их для оплаты следующих покупок
          </Text>
        </View>
      </View>

      {/* Заголовок таблицы */}
      <Text className="text-[16px] mb-[20px] font-interRegular">
        Как растет процент бонусов?
      </Text>

      {/* Таблица */}
      <View className="mb-[30px]">
        {bonusData.map((item, index) => (
          <View key={index} className="flex-row justify-between mb-[20px]">
            <Text className="text-[16px] font-interBold text-[#2E2E2E]">
              {item.range}
            </Text>
            <Text className="text-[16px] font-interBold text-[#2E2E2E]">
              {item.percent}
            </Text>
          </View>
        ))}
      </View>

      {/* Кнопка */}
      <CustomButton
        title="Активировать"
        onPress={() => {}}
        className="w-[172px] mx-auto"
      />
    </View>
  );
};

export default Bonus;
