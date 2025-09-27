import HomeAdress from "@/components/comp/homeadress";
import HomeFeatures from "@/components/comp/homeFeatures";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

const Home = () => {
  const bonusCount = 110;
  const address = "Калуга область, деревня Новая-Пушкино"; // специально длинный
  const street = "ул. Пушкинская, д. 123, 12312"; // тоже длинный

  const [isOpen, setIsOpen] = useState(false);

  const toggleAddress = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="pt-[56px] ml-[10px]">
        <HomeAdress
          bonusCount={bonusCount}
          address={address}
          street={street}
          isOpen={isOpen}
          toggleAddress={toggleAddress}
        />
        <HomeFeatures />
      </ScrollView>
    </View>
  );
};

export default Home;
