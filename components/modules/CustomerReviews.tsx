import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// Замените этот путь на актуальный путь к изображению профиля
const ProfileImage = require("../../assets/test/profile.png");

// Массив с данными для слайдера
const reviews = [
  {
    id: 1,
    text: "Заказывала букет на день рождения подруге. Цветы свежие, красиво оформлены, доставка вовремя. Подруга в восторге! Спасибо!",
    name: "Екатерина",
  },
  {
    id: 2,
    text: "Отличный сервис! Цветы простояли очень долго. Буду заказывать только здесь.",
    name: "Анна",
  },
  {
    id: 3,
    text: "Букет получился даже лучше, чем на сайте. Очень доволен качеством и быстрой доставкой.",
    name: "Дмитрий",
  },
];

const CustomerReviews = () => {
  // Хук для управления текущим индексом отзыва
  const [currentIndex, setCurrentIndex] = useState(0);

  // Логика переключения на следующий отзыв
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Логика переключения на предыдущий отзыв
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <View className="bg-white items-center justify-center px-4 py-8">
      {/* Аватар */}
      <Image
        source={ProfileImage}
        className="w-[50px] h-[50px] rounded-full mb-5 "
      />

      {/* Контейнер отзыва со стрелками */}
      <View className="w-full flex-row items-center justify-between relative px-10">
        {/* Левая стрелка */}
        <TouchableOpacity
          onPress={goToPrev}
          className="absolute left-0 top-[20px] w-[38px] h-[38px] items-center justify-center z-10"
        >
          <Image
            source={require("../../assets/Icon/BackArrow.png")}
            className="w-[21.63px] h-[21.63px]  "
          />
        </TouchableOpacity>

        {/* Текст текущего отзыва */}
        <View className="flex-1 items-center">
          <Text className="text-[14px] text-center font-interRegular text-main-200 mb-4 max-w-[300px]">
            {currentReview.text}
          </Text>
          <Text className="text-[18px] font-interMedium text-main-200 mb-[10px]">
            {currentReview.name}
          </Text>
        </View>

        {/* Правая стрелка */}
        <TouchableOpacity
          onPress={goToNext}
          className="absolute right-0 top-[20px] w-[38px] h-[38px] items-center justify-center z-10"
        >
          <Image
            source={require("../../assets/Icon/BackArrow.png")}
            className="w-[21.63px] h-[21.63px]  rotate-180"
          />
        </TouchableOpacity>
      </View>

      {/* Точки-индикаторы */}
      <View className="flex-row items-center justify-center mt-2 space-x-2">
        {reviews.map((_, index) => (
          <View
            key={index}
            className={`w-[10px] h-[10px] rounded-full mx-1 ${
              index === currentIndex ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomerReviews;
