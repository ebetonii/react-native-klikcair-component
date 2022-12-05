import { ActivityIndicator } from "react-native";
import React from "react";
import BStandartShort from "./BStandartShort";
import BStandartLong from "./BStandartLong";
import BCircle from "./BCircle";
import BSquare from "./BSquare";
// import { useFonts } from "expo-font";

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
  loadingColor?: string;
  buttonColor?: string;
  textColor?: string;
  round?: boolean;
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
  round,
}: ButtonProps) {
  category = category.toLowerCase();
  size = size.toLowerCase();
  type = type && type.toLowerCase();
  // const [fontsLoaded] = useFonts({
  //   "Lato-Regular": require(".fonts/Lato/Lato-Regular.ttf"),
  //   "Lato-Semibold": require("../fonts/Lato/Lato-Semibold.ttf"),
  //   "Lato-Bold": require("../fonts/Lato/Lato-Bold.ttf"),
  // });

  // useEffect((): any => {
  //   if (!fontsLoaded) {
  //     return null;
  //   }
  // }, [fontsLoaded]);

  return isLoading ? (
    <ActivityIndicator size="large" color={loadingColor} />
  ) : category === "square" ? (
    <BSquare
      disable={disable}
      onPress={onPress}
      icon={icon}
      type={type}
      title={title}
      styleContainer={styleContainer}
      styleText={styleText}
      buttonColor={buttonColor}
      textColor={textColor}
      children={children}
    />
  ) : category === "circle" ? (
    <BCircle
      disable={disable}
      onPress={onPress}
      icon={icon}
      type={type}
      title={title}
      styleContainer={styleContainer}
      styleText={styleText}
      buttonColor={buttonColor}
      textColor={textColor}
      children={children}
    />
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
        round={round}
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
        round={round}
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
      round={round}
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
  round: false,
};
