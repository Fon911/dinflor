import LoginLayout from "@/components/layout/Genlayout";
import CustomButton from "@/components/ui/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginSms = () => {
  const router = useRouter();
  const [phone, setPhone] = React.useState("+7");

  // отдельные состояния для чекбоксов
  const [consentPersonal, setConsentPersonal] = useState(false);
  const [consentAds, setConsentAds] = useState(false);

  const handleChange = (text: string) => {
    let digits = text.replace(/\D/g, "");
    if (digits.startsWith("7") || digits.startsWith("8")) {
      digits = digits.slice(1);
    }
    setPhone("+7" + digits);
  };

  return (
    <LoginLayout pageName={"Вход"}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={40}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 w-full mt-5 ml-4 flex-col justify-between">
          <View>
            <Text className="text-[16px] font-interRegular text-main-200">
              Введите номер телефона
            </Text>
            <View className="flex-row items-center mt-[10px] ">
              <Image
                source={require("../../assets/Icon/russia.png")}
                className="w-[19px] h-[14px] border-[#000000] border-[0.3px] rounded-[2px]"
              />
              <Text className="text-[20px] ml-[10px] font-interBold text-main-200 mr-1">
                +7
              </Text>
              <TextInput
                value={phone.replace("+7", "")}
                onChangeText={(text) => handleChange("+7" + text)}
                keyboardType="phone-pad"
                placeholder="912 345-67-89"
                placeholderTextColor="#919191"
                className="flex-1 text-[20px] font-interBold text-main-200"
              />
            </View>

            {/* Чекбокс — согласие на обработку персональных данных */}
            <View className="flex-row items-center mt-5">
              <TouchableOpacity
                onPress={() => setConsentPersonal(!consentPersonal)}
                activeOpacity={1}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-2
                ${
                  consentPersonal
                    ? "bg-main-100 border-main-100"
                    : "border-gray-400"
                }`}
              >
                {consentPersonal && (
                  <MaterialIcons name="check" size={15} color="white" />
                )}
              </TouchableOpacity>

              <Text className="text-[11px] text-main-200 font-interMedium">
                Я даю{" "}
                <Text className="text-main-100">
                  согласие на обработку персональных данных
                </Text>
              </Text>
            </View>

            {/* Чекбокс — согласие на рекламные сообщения */}
            <View className="flex-row items-center mt-[15px]">
              <TouchableOpacity
                onPress={() => setConsentAds(!consentAds)}
                activeOpacity={1}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-2
                ${
                  consentAds ? "bg-main-100 border-main-100" : "border-gray-400"
                }`}
              >
                {consentAds && (
                  <MaterialIcons name="check" size={18} color="white" />
                )}
              </TouchableOpacity>

              <Text className="text-[11px] font-interMedium text-main-200">
                Даю <Text className="text-main-100">Согласие</Text> на получение
                сообщений рекламного{"\n"}характера
              </Text>
            </View>
          </View>

          <View className="">
            <Text className="text-[11px] font-interMedium text-main-200">
              Нажимая на кнопку ниже, я подтверждаю согласие с{"\n"}
              <Text className="text-main-100">
                Условиями использования сервиса
              </Text>
            </Text>
            <CustomButton
              title="Получить СМС с кодом"
              onPress={() => {
                router.push("/(auth)/sms");
              }}
              className="mr-[20px] max-w-[345px] mt-[15px]"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LoginLayout>
  );
};

export default LoginSms;
