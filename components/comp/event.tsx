import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import EventCard from "../cards/EventCard";
import MonthLayout from "../layout/MonthLayout";
import CustomButton from "../ui/CustomButton";

const Event = () => {
  const events = [
    {
      celebrant: "Nikita Rusakov",
      date: "2025-10-06",
      event: "Birthday",
      time: "12:00",
      phone: "+77071234567",
      address: "Almaty, Kazakhstan",
    },
    {
      celebrant: "Mom",
      date: "2025-10-15",
      event: "Birthday",
      time: "18:00",
      phone: "+77070000000",
      address: "Almaty, Kazakhstan",
    },
    {
      celebrant: "Dad",
      date: "2025-11-02",
      event: "Anniversary",
      time: "14:00",
      phone: "+77071111111",
      address: "Almaty, Kazakhstan",
    },
    {
      celebrant: "Dad",
      date: "2026-01-01",
      event: "День рождкния",
      time: "00:00",
      phone: "+77071111111",
      address: "Almaty, Kazakhstan",
    },
  ];

  // Группировка по месяцу
  const groupedEvents = events.reduce(
    (acc: Record<string, typeof events>, event) => {
      const month = new Date(event.date).toLocaleString("ru-RU", {
        month: "long",
      });
      const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);
      if (!acc[monthCapitalized]) acc[monthCapitalized] = [];
      acc[monthCapitalized].push(event);
      return acc;
    },
    {}
  );

  const months = Object.keys(groupedEvents);

  // Функция для форматирования даты: 2025-10-15 → 15 октября 2025 г.
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("ru-RU", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year} г.`;
  };

  return (
    <View className="flex-1">
      {events.length === 0 ? (
        <View className="flex flex-col items-center justify-center mx-[37px]">
          <Image
            source={require("@/assets/image/eventCalendar.png")}
            className="w-[265px] h-[226px] mx-[20px]"
          />
          <Text className="text-[15px] font-interBold mt-[30px]">
            Добавляйте события
          </Text>
          <Text className="text-[12px] font-interRegular text-center mt-[10px]">
            Важные дни, праздники, дни рождения близких и так далее, и мы
            обязательно заранее вам о них напомним
          </Text>
          <CustomButton
            title="Добавить событие"
            onPress={() => router.push("/(profile)/newevent")}
            className="mt-[20px] px-[29px]"
          />
        </View>
      ) : (
        <View className="px-[15px] mt-[20px]">
          {months.map((month) => (
            <MonthLayout key={month} month={month}>
              {groupedEvents[month].map((event, index) => (
                <EventCard
                  key={index}
                  celebrant={event.celebrant}
                  date={formatDate(event.date)}
                  event={event.event}
                />
              ))}
            </MonthLayout>
          ))}
        </View>
      )}
    </View>
  );
};

export default Event;
