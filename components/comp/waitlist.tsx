import CustomButton from "@/components/ui/CustomButton";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import WaitCard from "../cards/WaitCard";

const Waitlist = () => {
  const ordercount = 1;
  const items = [{}, {}, {}, {}, {}, {}, {}];
  const router = useRouter();

  return (
    <View className="flex-1">
      {ordercount ? (
        <FlatList
          className="px-[8px] mt-[20px]"
          data={items}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2} // два ряда карточек
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 15,
          }}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => <WaitCard />}
        />
      ) : (
        <View className="flex-1 flex-col items-center justify-center mx-[37px]">
          <Image
            source={require("@/assets/image/waitlist.png")}
            className="w-[251px] h-[250px] mx-[20px]"
          />
          <Text className="text-[15px] font-interBold mt-[30px]">
            Пустовато...
          </Text>
          <Text className="text-[12px] font-interRegular text-center mt-[10px]">
            Подписывайтесь за товарами которые распроданы, чтобы первыми узнать
            о поступлении в продажу
          </Text>
          <CustomButton
            title="Перейти к товарам"
            onPress={() => router.push("/(profile)/newevent")}
            className="mt-[20px] px-[29px]"
          />
        </View>
      )}
    </View>
  );
};

export default Waitlist;
