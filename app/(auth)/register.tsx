import LoginLayout from "@/components/layout/Genlayout";
import CustomButton from "@/components/ui/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import CustomInput from "@/components/ui/CustomInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const register = () => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginLayout pageName="Регистрация">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={40}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 w-full mt-5 ml-4 flex-col justify-between">
          <View>
            <View>
              <CustomInput
                label="Ваше имя"
                value={name}
                onChangeText={setName}
              />
              <CustomInput
                label="Ваша фамилия"
                value={surname}
                onChangeText={setSurname}
              />
              <CustomInput
                label="Номер телефона"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
              <CustomInput
                label="Ваш e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <CustomInput
                label="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View className="flex-row items-center mt-[15px]">
              <TouchableOpacity
                onPress={() => setAgree(!agree)}
                activeOpacity={1}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-2
              ${agree ? "bg-main-100 border-main-100" : "border-gray-400"}`}
              >
                {agree && (
                  <MaterialIcons name="check" size={15} color="white" />
                )}
              </TouchableOpacity>

              <Text className="text-[11px] text-main-200 font-interMedium">
                Я прочитал и согласен с условиями{" "}
                <Text className="text-main-100">
                  Политика {"\n"}в отношении обработки персональных данных
                </Text>
              </Text>
            </View>
          </View>
          <View className="">
            <View className="flex-row items-center">
              <Text className="text-[11px] font-interMedium text-main-200">
                Уже есть аккаунт?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text className="text-main-100 text-[11px]">Войти</Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title="Зарегистрироваться"
              onPress={() => {}}
              className="mr-[20px] max-w-[345px] mt-[15px]"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LoginLayout>
  );
};

export default register;
