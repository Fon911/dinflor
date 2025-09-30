import React from "react";
import { Image, Text, View } from "react-native";

const ShopInfoCard = ({
  textColor,
  icon,
  CharacteristicsSum,
  CharacteristicsName,
}: {
  textColor: string;
  icon: any;
  CharacteristicsSum: string;
  CharacteristicsName: string;
}) => {
  return (
    <View className="flex flex-row items-center bg-[#EFEFEF] w-[169px] h-[49px] rounded-[10px] py-[5px]">
      <View className="mr-[5px]">
        <Image source={icon} className="w-[14px] h-[14px] ml-[10px]" />
      </View>
      <View>
        <Text className={` text-[14px] font-interBold ${textColor}`}>
          {CharacteristicsSum}
        </Text>
        <Text className=" text-[14px] font-interLight">
          {CharacteristicsName}
        </Text>
      </View>
    </View>
  );
};

export default ShopInfoCard;
