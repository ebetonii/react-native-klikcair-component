import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  backgroundColor,
  color,
  CTextLight4,
} from "../../assets/styles/index";
import { font } from "../../assets/styles";
import { fontSize } from "../../assets/styles";
import { scale } from "../../helper/scaling";

interface BSquareProps{
  disable: boolean,
  onPress?: any,
  icon?: any,
  title?: string,
  type: string,
  children?: any,
  styleContainer?: any,
  styleText?:any,
  textColor: string,
  buttonColor: string,
}

export default function BSquare({
  disable,
  onPress,
  icon,
  type,
  title,
  children,
  styleContainer,
  styleText,
  textColor,
  buttonColor,
}: BSquareProps) {
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
      {icon ? (
        <Image
          source={icon}
          style={[styles.imageSize, { tintColor: CTextLight4 }]}
        />
      ) : (
        <Text
          style={[
            font.Lato,
            color.TextLight4,
            styleText,
            { textAlign: "center" },
          ]}
        >
          {title}
        </Text>
      )}
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
      {icon ? (
        <Image
          source={icon}
          style={[styles.imageSize, { tintColor: textColor }]}
        />
      ) : (
        <Text
          style={[
            { color: textColor },
            styleText,
            font.LatoButton,
            fontSize["button"],
          ]}
        >
          {title}
        </Text>
      )}
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
          { color: textColor },
          styleText,
          font.LatoButton,
          fontSize["button"],
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : type === "link" ? (
    <TouchableOpacity
      style={[
        { borderWidth: 1, borderColor: buttonColor, borderStyle: "dashed" },
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
          { color: textColor },
          styleText,
          font.LatoButton,
          fontSize["button"],
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styleContainer} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    justifyContent: "center",
    alignItems: "center",
  },
  size: {
    width: "10%",
    minWidth: scale(40),
    height: scale(40),
  },
  imageSize: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
  },
});
