import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import font from "../../assets/styles/font.js";
import fontSize from "../../assets/styles/fontSize.js";
import { backgroundColor} from "../../assets/styles/colors.js";
import { scale } from "../../helper/scaling";

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
}) {
  return disable ? (
    <View
      style={[
        backgroundColor.Neutral4,
        icon && { flexDirection: "row" },
        styles.container,
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
        styles.container,
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
        styles.container,
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
        styles.container,
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
