import React from "react";
import { Image, Text, View } from "react-native";

const FeaturesCard = ({
  title,
  numOfLines,
  imageadress,
  width,
}: {
  title: string;
  numOfLines: number;
  imageadress: string;
  width: number;
}) => {
  return (
    <View
      className={`h-[67px] bg-[#F66CA326] rounded-[10px] mr-[3px] overflow-hidden `}
      style={{ width }}
    >
      {/* Фон */}
      <Image source={imageadress} className="w-full h-full absolute" />
      {/* Текст сверху справа */}
      <Text
        className="absolute top-2h left-2 text-[14px] font-interMedium text-main-200"
        numberOfLines={numOfLines}
      >
        {title}
      </Text>
    </View>
  );
};

export default FeaturesCard;
