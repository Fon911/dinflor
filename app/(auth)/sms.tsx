import GenLayout from "@/components/layout/Genlayout";
import React, { useEffect, useState } from "react";
import { Keyboard, Text, View } from "react-native";
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

const Sms = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // 1. Автозавершение при заполнении всех 4 символов
  useEffect(() => {
    if (value.length === CELL_COUNT) {
      handleSubmit(value);
    }
  }, [value]);

  const handleSubmit = (code: string) => {
    Keyboard.dismiss(); // скрыть клавиатуру
    console.log("Введён код:", code);
    // здесь вызови API или переход на следующий экран
  };

  return (
    <GenLayout pageName={"Код из СМС"}>
      <View className="flex flex-1 w-full mt-5 ml-4">
        <Text className="text-[15px] text-main-200 mb-[20px]">
          Отправлен на номер +7 912 345-67-89
        </Text>
        <View className="flex-row items-center">
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            returnKeyType="done" // клавиша "ОК"
            onSubmitEditing={() => handleSubmit(value)} // 2. Нажатие "ОК"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                className="w-[30px] h-[30px] items-center justify-center mr-[15px]"
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol ? (
                  <Text className="text-[20px] font-interBold text-black">
                    {symbol}
                  </Text>
                ) : (
                  <View
                    className={`w-[15px] h-[15px] rounded-full ${
                      isFocused ? "bg-gray-400" : "bg-gray-300"
                    }`}
                  />
                )}
              </View>
            )}
          />
        </View>
        <Text className="text-[11px] text-main-200 mt-[20px]">
          Не получили код?{" "}
          <Text className="text-main-100">Отправить снова</Text>
        </Text>
        <Text className="text-[11px] text-main-100 mt-[15px]">
          Изменить номер
        </Text>
      </View>
    </GenLayout>
  );
};

export default Sms;
