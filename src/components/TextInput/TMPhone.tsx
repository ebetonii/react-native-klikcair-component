import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import { CNeutral, CNeutral4, CNeutral6 } from "../../assets/styles/index";
import { useState } from "react";
import { font } from "../../assets/styles";
import { fontSize } from "../../assets/styles";
import { scale } from "../../helper/scaling";

interface TMPhoneProps {
  placeholder?: string;
  onChangeText?: any;
  value?: string;
  disable: boolean;
  size: string;
  countryNumber: string;
  keyboardType: any;
  maxLength?: number;
  onPressIn?: any;
  contextMenuHidden: any;
  focusColor: string;
  blurColor: string;
}

export default function TMPhone({
  placeholder,
  onChangeText,
  value,
  disable,
  size,
  countryNumber,
  keyboardType,
  maxLength,
  onPressIn,
  contextMenuHidden,
  focusColor,
  blurColor,
}: TMPhoneProps) {
  const [borderColor, setBorderColor] = useState(blurColor);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: disable ? CNeutral4 : CNeutral,
          borderColor: borderColor,
          height:
            size === "medium"
              ? scale(40)
              : size === "large"
              ? scale(42)
              : scale(32),
        },
      ]}
    >
      <Text
        style={[
          font.Lato,
          size === "medium"
            ? fontSize[14]
            : size === "large"
            ? fontSize[16]
            : fontSize[12],
        ]}
      >
        {countryNumber}
      </Text>
      <TextInput
        style={[
          styles.textInput,
          size === "medium"
            ? fontSize[14]
            : size === "large"
            ? fontSize[16]
            : fontSize[12],
        ]}
        onBlur={() => setBorderColor(blurColor)}
        onFocus={() => setBorderColor(focusColor)}
        contextMenuHidden={contextMenuHidden}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        editable={!disable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onPressIn={onPressIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
  },
  textInput: {
    width: "80%",
    // height: scale(35),
    borderRadius: scale(2),
    justifyContent: "center",
    // backgroundColor:'pink'
    // alignItems:'center'
  },
  icon: {
    width: scale(20),
    height: scale(20),
    resizeMode: "contain",
    marginRight: scale(10),
    tintColor: CNeutral6,
  },
});
