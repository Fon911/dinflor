import React from "react";
import { FlatList, Image, View } from "react-native";

const FlowerSpin = () => {
  return (
    <View>
      <View className="w-full h-[366px]">
        <Image
          source={require("@/assets/test/luna.png")}
          className="w-full h-[366px]"
          resizeMode="cover"
        />
      </View>
      <FlatList
        className=""
        data={Array(8).fill(require("@/assets/test/luna.png"))}
        renderItem={({ item }) => (
          <Image
            source={item}
            className="w-[70px] h-[70px] m-[3px]"
            resizeMode="cover"
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FlowerSpin;
