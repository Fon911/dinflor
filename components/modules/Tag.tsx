import { Text, View } from "react-native";

type TagProps = {
  title: string;
  color?: string;
};

export default function Tag({ title, color = "bg-main-100" }: TagProps) {
  return (
    <View className={`${color} px-4 py-2 rounded-lg mr-[9px]`}>
      <Text className="text-white font-interMedium text-[11px]">{title}</Text>
    </View>
  );
}
