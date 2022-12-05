import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  CError,
  CNeutral,
  CNeutral4,
  color,
} from "../../assets/styles/index";
import { useState } from "react";
import { font } from "../../assets/styles";
import { fontSize } from "../../assets/styles";
import { scale } from "../../helper/scaling";

interface TMNormalProps {
  placeholder?: string;
  onChangeText?: any;
  value?: string;
  disable: boolean;
  title?: string;
  subtitle?: string;
  size: string;
  keyboardType: any;
  maxLength?: number;
  isEmpty?: boolean;
  subtitleType?: string;
  isMandatory?: boolean;
  style?: any;
  onPressIn?: any;
  focusColor: string;
  blurColor: string;
}

export default function TMNormal({
  placeholder,
  onChangeText,
  value,
  disable,
  title,
  subtitle,
  size,
  keyboardType,
  maxLength,
  isEmpty,
  subtitleType,
  isMandatory,
  style,
  onPressIn,
  focusColor,
  blurColor
}: TMNormalProps) {
  const [borderColor, setBorderColor] = useState(blurColor);

  const colorSubs = () => {
    if (subtitleType === "error") {
      return color.Error;
    } else {
      return color.Neutral7;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.TIcontainer]}>
        {title && (
          <Text
            style={[
              isEmpty || (subtitleType === "error" && subtitle)
                ? color.Error
                : color.Neutral12,
              font.LatoCaption,
              fontSize.caption,
              { marginBottom: scale(5) },
            ]}
          >
            {title}
            {isMandatory && "*"}
          </Text>
        )}
        <TextInput
          style={[
            style,
            font.Lato,
            styles.textInput,
            color.Neutral12,
            {
              borderColor:
                isEmpty || (subtitleType === "error" && subtitle)
                  ? CError
                  : borderColor,
              backgroundColor: disable ? CNeutral4 : CNeutral,
              height:
                size === "medium"
                  ? scale(35)
                  : size === "large"
                  ? scale(42)
                  : scale(35),
            },
            size === "medium"
              ? fontSize[14]
              : size === "large"
              ? fontSize[16]
              : fontSize[14],
          ]}
          onPressIn={onPressIn}
          onBlur={() => setBorderColor(blurColor)}
          onFocus={() => setBorderColor(focusColor)}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          editable={!disable}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
        {subtitle && (
          <Text
            style={[colorSubs(), fontSize.caption, { marginTop: scale(5) }]}
          >
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: scale(10),
  },
  TIcontainer: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: scale(15),
    borderRadius: scale(2),
    // backgroundColor:'pink'
  },
});
