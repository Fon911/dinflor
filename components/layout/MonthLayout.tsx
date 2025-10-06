import React from "react";
import { Text, View } from "react-native";

const MonthLayout = ({
  children,
  month,
}: {
  children: React.ReactNode;
  month: string;
}) => {
  return (
    <View>
      <Text className="mb-[20px] text-[15px] font-interBold text-main-200">
        {month}
      </Text>
      <View>{children}</View>
    </View>
  );
};

export default MonthLayout;
