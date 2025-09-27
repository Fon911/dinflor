import { useNavigationState } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GenLayout = ({
  pageName,
  children,
  backArrow,
}: {
  pageName: string;
  children: React.ReactNode;
  backArrow?: boolean;
}) => {
  const router = useRouter();
  const routesCount = useNavigationState((state) => state.routes.length);

  const handleClose = () => {
    if (routesCount > 1) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-row items-center pt-[40px] mb-[25px]">
        {/* Левая кнопка */}
        <View className="ml-4">
          <TouchableOpacity onPress={handleClose}>
            {backArrow ? (
              <Image
                source={require("@/assets/Icon/BackArrow.png")}
                className="w-[30px] h-[30px]"
              />
            ) : (
              <Text className="text-[16px] font-interRegular text-main-200">
                Закрыть
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Заголовок по центру */}
        <Text className="flex-1 text-center text-main-200 text-[16px] font-interBold">
          {pageName}
        </Text>

        {/* Пустой блок справа, чтобы выровнять заголовок по центру */}
        <View className="ml-4">
          {backArrow ? (
            <View className="w-[30px] h-[30px]" />
          ) : (
            <View className="w-[60px]" />
          )}
        </View>
      </View>

      <View className="flex-1 w-full">{children}</View>
    </SafeAreaView>
  );
};

export default GenLayout;
