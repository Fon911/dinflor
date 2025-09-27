import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  width?: string;
  color?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  width,
  color,
  height,
  className,
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      className={`
        ${width ? width : ""} 
        ${height ? height : "h-[41px]"} 
        ${disabled ? "bg-gray-300" : color ? color : "bg-main-100"}
        rounded-xl flex items-center justify-center
        ${className ? className : ""}
        
        active:bg-[#D3D3D3]
      `}
    >
      {({ pressed }) => (
        <Text
          className={`
            text-[15px] font-interSemiBold text-[#ffffff]
            ${disabled ? "text-[#919191]" : "text-[#ffffff]"}
          `}
          style={{
            color: pressed ? "#919191" : "#ffffff",
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomButton;
