import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  TextInput as RNTextInput,
  StyleSheet,
  View,
} from "react-native";

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "phone-pad" | "numeric";
  secureTextEntry?: boolean;
  style?: object;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: "absolute" as const,
    left: 15,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 4], // чуть ниже центр -> наверх
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 10], // placeholder 15 -> label 10
    }),
    color: "#A4A3A3",
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <RNTextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginRight: 32,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF1493",
    height: 48,
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    color: "#2D2D2D",
    paddingHorizontal: 15,
    height: "100%",
    textAlignVertical: "top", // теперь текст идёт сверху, а не по центру
    paddingTop: 18, // сдвигаем текст чуть ниже
  },
});

export default CustomInput;
