import { ActivityIndicator} from "react-native";
import React, { useEffect } from "react";
import BStandartShort from "./BStandartShort";
import BStandartLong from "./BStandartLong";
import { useFonts } from "expo-font";

interface ButtonProps {
  disable?: boolean;
  onPress?: any;
  icon?: string;
  type: "primary" | "secondary" | "link" | "textLink" | string;
  title: string;
  size?: "short" | "long" | string;
  children?: any;
  isLoading?: boolean;
  category: "standard" | "circle" | "square" | string;
  styleContainer?: any;
  styleText?: any;
  loadingColor?: "#1674BE" | string;
  buttonColor?: "#1674BE" | string;
  textColor?: "#1674BE" | string;
}

export default function Button({
  disable, // (true/false)
  onPress,
  icon,
  type = "primary", // (primary/secondary/link/textLink)
  title,
  size = "long", // (short/long)
  children,
  isLoading, // (true/false)
  category = "standard", // (standart/circle/square)
  styleContainer,
  styleText,
  loadingColor,
  buttonColor,
  textColor,
}: ButtonProps) {
  category = category.toLowerCase();
  size = size.toLowerCase();
  type = type && type.toLowerCase();
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("../fonts/Lato/Lato-Regular.ttf"),
    "Lato-Semibold": require("../fonts/Lato/Lato-Semibold.ttf"),
    "Lato-Bold": require("../fonts/Lato/Lato-Bold.ttf"),
  });

  useEffect((): any => {
    if (!fontsLoaded) {
      return null;
    }
  }, [fontsLoaded]);

  return isLoading ? (
    <ActivityIndicator size="large" color={loadingColor} />
  ) : category && "standard" ? (
    size === "short" ? (
      <BStandartShort
        disable={disable}
        onPress={onPress}
        icon={icon}
        type={type}
        title={title}
        styleContainer={styleContainer}
        styleText={styleText}
        buttonColor={buttonColor}
        textColor={textColor}
      />
    ) : (
      <BStandartLong
        disable={disable}
        onPress={onPress}
        icon={icon}
        type={type}
        title={title}
        styleContainer={styleContainer}
        styleText={styleText}
        buttonColor={buttonColor}
        textColor={textColor}
      />
    )
  ) : (
    <BStandartLong
      disable={disable}
      onPress={onPress}
      icon={icon}
      type={type}
      title={title}
      styleContainer={styleContainer}
      styleText={styleText}
      buttonColor={buttonColor}
      textColor={textColor}
    />
  );
}

Button.defaultProps = {
  category: "standard",
  type: "primary",
  size: "short",
  disable: false,
  isLoading: false,
  loadingColor: "#1674BE",
  buttonColor: "#1674BE",
  textColor: "#1674BE",
};
