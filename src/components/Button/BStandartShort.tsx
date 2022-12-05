import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { font } from "../../assets/styles";
import { fontSize } from "../../assets/styles";
import { backgroundColor } from "../../assets/styles/index";
import { scale } from "../../helper/scaling";

interface BStandartShort {
  disable: boolean;
  onPress?: any;
  icon?: any;
  title?: string;
  type: string;
  children?: any;
  styleContainer?: any;
  styleText?: any;
  textColor: string;
  buttonColor: string;
  round: boolean;
}

export default function BStandartShort({
  disable,
  onPress,
  icon,
  type,
  title,
  styleContainer,
  styleText,
  textColor,
  buttonColor,
  round,
}: BStandartShort) {
  return disable ? (
    <View
      style={[
        backgroundColor.Neutral4,
        icon && { flexDirection: "row" },
        round ? styles.roundContainer : styles.container,
        styles.size,
        styleContainer,
      ]}
    >
      {icon && (
        <Image
          source={icon}
          style={[styles.imageSize, styleText, { tintColor: "#BFBFBF" }]}
        />
      )}
      <Text
        style={[
          font.Lato,
          styleText,
          styleText,
          { color: "#BFBFBF", textAlign: "center" },
        ]}
      >
        {title}
      </Text>
    </View>
  ) : type === "primary" ? (
    <TouchableOpacity
      style={[
        {
          backgroundColor: buttonColor,
        },
        round ? styles.roundContainer : styles.container,
        icon && { flexDirection: "row" },
        styles.size,
        styleContainer,
      ]}
      onPress={onPress}
    >
      {icon && (
        <Image
          source={icon}
          style={[styles.imageSize, { tintColor: textColor }]}
        />
      )}
      <Text
        style={[
          font.LatoButton,
          fontSize["button"],
          styleText,
          { textAlign: "center", color: textColor },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : type === "secondary" ? (
    <TouchableOpacity
      style={[
        { borderWidth: 1, borderColor: buttonColor },
        backgroundColor.Transparent,
        round ? styles.roundContainer : styles.container,
        icon && { flexDirection: "row" },
        styles.size,
        styleContainer,
      ]}
      onPress={onPress}
    >
      {icon && (
        <Image
          source={icon}
          style={[styles.imageSize, { tintColor: textColor }]}
        />
      )}
      <Text
        style={[
          font.LatoButton,
          fontSize["button"],
          styleText,
          { textAlign: "center", color: textColor },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : type === "link" ? (
    <TouchableOpacity
      style={[
        { borderWidth: 1, borderColor: buttonColor, borderStyle: "dashed" },
        round ? styles.roundContainer : styles.container,
        icon && { flexDirection: "row" },
        styles.size,
        styleContainer,
      ]}
      onPress={onPress}
    >
      {icon && (
        <Image
          source={icon}
          style={[styles.imageSize, { tintColor: textColor }]}
        />
      )}
      <Text
        style={[
          font.LatoButton,
          fontSize["button"],
          styleText,
          { textAlign: "center", color: textColor },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} style={styleContainer}>
      <Text
        style={[
          font.LatoButton,
          fontSize["button"],
          styleText,
          { textAlign: "center", color: textColor },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(4),
  },
  roundContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(50),
  },
  size: {
    width: "40%",
    minWidth: scale(100),
    height: scale(45),
  },
  imageSize: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
    marginRight: scale(10),
  },
});
