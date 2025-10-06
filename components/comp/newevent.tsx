import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";

const NewEvent = () => {
  const [event, setEvent] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (_: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      // небольшая задержка, чтобы CustomInput не лагал
      setTimeout(() => {
        setDate(selectedDate);
      }, 50);
    }
  };

  // Функция для красивого отображения даты
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <View className="flex-1 flex-col gap-[10px] items-center">
      <View className="w-full px-[15px]">
        <CustomInput label="Событие" value={event} onChangeText={setEvent} />
        <CustomInput
          label="Дата события"
          value={date ? formatDate(date) : ""}
          onChangeText={() => {}}
          onTouchStart={() => setShowPicker(true)} // ловим тач на инпуте
        />

        {showPicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
          />
        )}
        <CustomInput
          label="Кого поздравить"
          value={name}
          onChangeText={setName}
        />
        <CustomInput
          label="Номер телефона(необязательно)"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />
        <CustomInput
          label="Адрес получателя(необязательно)"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <CustomButton
        title="Сохранить"
        onPress={() => {
          router.push("/(profile)/event");
        }}
        className="mt-[10px] w-[200px] self-center"
      />
    </View>
  );
};

export default NewEvent;
