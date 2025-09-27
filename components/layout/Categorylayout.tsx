import React from "react"; // Убрал лишний импорт Children
import { Text, View } from "react-native";

const Categorylayout = ({ children, title }: any) => {
  return (
    <View className="py-4 bg-white">
      {/* Контейнер заголовка */}
      <View className="flex-row items-center pl-0">
        {/* Черная вертикальная полоска */}

        {/* Обертка для розовой линии и текста */}
        <View className="flex-row items-center ">
          {/* ml-[30px] = w-4 (полоска) + отступ */}
          {/* Розовая горизонтальная полоска */}
          <View className="w-[80px] h-[2px] bg-[#FF4081] mr-3" />
          {/* Текст заголовка */}
          <Text className="text-[16px] font-semibold text-main-200 uppercase">
            {title}
          </Text>
        </View>
      </View>

      {/* Контейнер для дочерних элементов (вашего горизонтального списка) */}
      <View className="mt-4">{children}</View>
    </View>
  );
};

export default Categorylayout;
