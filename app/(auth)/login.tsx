import GenLayout from "@/components/layout/Genlayout";
import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {
  const [remember, setRemember] = useState(false);
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  return (
    <GenLayout pageName="Вход">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={40}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 w-full mt-5 ml-4 flex-col justify-between">
          <View>
            <Text className="text-[15px] font-interRegular text-main-200">
              Для входа в аккаунт введите логин и пароль
            </Text>
            <View>
              <CustomInput
                label="Логин"
                value={login}
                onChangeText={setLogin}
              />
              <CustomInput
                label="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <Text className="text-[11px] font-interMedium text-main-200 mt-[15px]">
              Забыли пароль?
            </Text>
            <View className="flex-row items-center mt-[15px]">
              <TouchableOpacity
                onPress={() => setRemember(!remember)}
                activeOpacity={1}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-2
                ${
                  remember ? "bg-main-100 border-main-100" : "border-gray-400"
                }`}
              >
                {remember && (
                  <MaterialIcons name="check" size={15} color="white" />
                )}
              </TouchableOpacity>

              <Text className="text-[11px] text-main-200 font-interMedium">
                Запомнить
              </Text>
            </View>
          </View>
          <View className="">
            <View className="flex-row items-center">
              <Text className="text-[11px] font-interMedium text-main-200">
                Нет аккаунта?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <Text className="text-main-100 text-[11px]">
                  Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title="Войти"
              onPress={() => {}}
              className="mr-[20px] max-w-[345px] mt-[15px]"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </GenLayout>
  );
};

export default Login;
