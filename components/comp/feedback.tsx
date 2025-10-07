import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import AltCategory from "../layout/altCategory";

interface RatingBarProps {
  label: string;
  score: number; // от 0 до 5
}

const RatingBar = ({ label, score }: RatingBarProps) => {
  const barWidth = `${(score / 5) * 100}%`;

  return (
    <View className="mb-2">
      <View className="flex-row items-center">
        <Text className="text-main-200 text-[14px] font-interMedium mr-[36px] w-[105px]">
          {label}
        </Text>
        <View className="flex-1 h-[3px] bg-gray-300 rounded-full mr-2">
          <View
            className="h-full bg-main-100 rounded-full"
            style={{ width: barWidth }}
          />
        </View>
        <Text className="text-main-200 text-[14px] font-interMedium w-[30px] text-right">
          {score.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Отправитель",
    date: "Сегодня",
    rating: 5,
    text: "Заказывала букет на день рождения подруге. Цветы свежие, красиво оформлены, доставка вовремя. Подруга в восторге! Спасибо!",
  },
  {
    id: "2",
    author: "Отправитель",
    date: "Сегодня",
    rating: 5,
    text: "Заказывала букет на день рождения подруге. Цветы свежие, красиво оформлены, доставка вовремя. Подруга в восторге! Спасибо!",
  },
  {
    id: "3",
    author: "Отправитель",
    date: "Сегодня",
    rating: 5,
    text: "Заказывала букет на день рождения подруге. Цветы свежие, красиво оформлены, доставка вовремя. Подруга в восторге! Спасибо!",
  },
  {
    id: "4",
    author: "Отправитель",
    date: "Сегодня",
    rating: 5,
    text: "Заказывала букет на день рождения подруге. Цветы свежие, красиво оформлены, доставка вовремя. Подруга в восторге! Спасибо!",
  },
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <View className="border-b border-pink-100 py-3">
      <View className="flex-row items-center mb-1">
        <View className="w-[43px] h-[43px] bg-gray-300 rounded-full mr-3" />
        <View className="flex-1">
          <Text className="text-main-200 font-interMedium text-[14px]">
            {review.author}
          </Text>
          <Text className="text-main-200 font-interLight text-[10px]">
            {review.date}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("@/assets/Icon/star.png")}
            className="w-[16px] h-[16px] mr-[5px]"
          />

          <Text className="text-main-200 font-interMedium text-[14px]">
            {review.rating}
          </Text>
        </View>
      </View>
      <Text className="text-main-200 font-interRegular text-[14px]">
        {review.text}
      </Text>
    </View>
  );
};

const Feedback = () => {
  const ratings = [
    { label: "Цена/качество", score: 4.9 },
    { label: "Доставка", score: 4.9 },
    { label: "Соответствие", score: 4.9 },
  ];

  const average =
    ratings.reduce((acc, item) => acc + item.score, 0) / ratings.length;

  return (
    <View className="flex-1 mx-[15px]">
      {/* Рейтинг */}
      <View className="flex-row items-center mb-2">
        <Image
          source={require("@/assets/Icon/star.png")}
          className="w-[29px] h-[29px]"
        />
        <Text className="ml-2 text-[20px] text-main-200 font-interMedium">
          {average.toFixed(2)} / 5
        </Text>
      </View>
      <Text className="text-main-200 text-[14px] font-interMedium">
        {ratings.length * 1000} оценок
      </Text>

      {/* Полоски рейтинга */}
      <View className="mt-[20px]">
        {ratings.map((r) => (
          <RatingBar key={r.label} label={r.label} score={r.score} />
        ))}
      </View>

      {/* Отзывы с прокруткой */}
      <AltCategory title="Отзывы">
        <ScrollView
          style={{ maxHeight: 380 }} // <-- высота блока отзывов
          showsVerticalScrollIndicator={true}
        >
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </ScrollView>
      </AltCategory>
    </View>
  );
};

export default Feedback;
