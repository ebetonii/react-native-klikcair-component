import React from "react";
import TMNormal from "./TMNormal";
import TMPrefix from "./TMPrefix";
import TMSuffix from "./TMSuffix";
import TMPrefixSuffix from "./TMPrefixSuffix";
import TMPhone from "./TMPhone";

interface TextInputProps {
  size: "medium" | "large" | string;
  placeholder?: string;
  onChangeText?: any;
  value?: string;
  disable: boolean;
  title?: string;
  subtitle?: string;
  icon?: any;
  type:
    | "suffix"
    | "prefix"
    | "suffix"
    | "prefixsuffix"
    | "title"
    | "subtitle"
    | "titlensubtitle"
    | "phone"
    | string;
  keyboardType: any;
  maxLength?: number;
  isEmpty?: boolean;
  subtitleType?: string;
  isMandatory?: boolean;
  style?: any;
  onPressIn?: any;
  countryNumber: string;
  contextMenuHidden: boolean;
  focusColor: string;
  blurColor: string;
}

export default function TextInput({
  size,
  placeholder,
  onChangeText,
  value,
  disable,
  title,
  subtitle,
  icon,
  type,
  keyboardType,
  maxLength,
  isEmpty,
  subtitleType,
  isMandatory,
  style,
  onPressIn,
  countryNumber,
  contextMenuHidden,
  focusColor,
  blurColor,
}: TextInputProps) {
  type = type && type.toLowerCase();
  size = size && size.toLowerCase();
  return type === "normal" ? (
    <TMNormal
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      disable={disable}
      size={size}
      keyboardType={keyboardType}
      maxLength={maxLength}
      isEmpty={isEmpty}
      isMandatory={isMandatory}
      style={style}
      onPressIn={onPressIn}
      focusColor={focusColor}
      blurColor={blurColor}
    />
  ) : type === "prefix" ? (
    <TMPrefix
      placeholder={placeholder}
      onChangeText={onChangeText}
      icon={icon}
      value={value}
      disable={disable}
      size={size}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onPressIn={onPressIn}
      focusColor={focusColor}
      blurColor={blurColor}
    />
  ) : type === "suffix" ? (
    <TMSuffix
      placeholder={placeholder}
      onChangeText={onChangeText}
      icon={icon}
      value={value}
      disable={disable}
      size={size}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onPressIn={onPressIn}
      focusColor={focusColor}
      blurColor={blurColor}
    />
  ) : type === "prefixsuffix" ? (
    <TMPrefixSuffix
      placeholder={placeholder}
      onChangeText={onChangeText}
      icon={icon}
      value={value}
      disable={disable}
      size={size}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onPressIn={onPressIn}
      focusColor={focusColor}
      blurColor={blurColor}
    />
  ) : type === "title" ? (
    <TMNormal
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      disable={disable}
      size={size}
      title={title}
      keyboardType={keyboardType}
      maxLength={maxLength}
      isEmpty={isEmpty}
      isMandatory={isMandatory}
      focusColor={focusColor}
      blurColor={blurColor}
    />
  ) : type === "subtitle" ? (
    <TMNormal
      style={style}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      disable={disable}
      size={size}
      subtitle={subtitle}
      keyboardType={keyboardType}
      maxLength={maxLength}
      isEmpty={isEmpty}
      isMandatory={isMandatory}
      subtitleType={subtitleType}
      focusColor={focusColor}
      blurColor={blurColor}
    />
  ) : type === "titlensubtitle" ? (
    <TMNormal
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      disable={disable}
      size={size}
      title={title}
      subtitle={subtitle}
      keyboardType={keyboardType}
      maxLength={maxLength}
      isEmpty={isEmpty}
      isMandatory={isMandatory}
      subtitleType={subtitleType}
      focusColor={focusColor}
      blurColor={blurColor}
    />
  ) : (
    type === "phone" && (
      <TMPhone
        placeholder={placeholder}
        onChangeText={onChangeText}
        countryNumber={countryNumber}
        value={value}
        disable={disable}
        size={size}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onPressIn={onPressIn}
        contextMenuHidden={contextMenuHidden}
        focusColor={focusColor}
        blurColor={blurColor}
      />
    )
  );
}

TextInput.defaultProps = {
  size: "medium",
  disable: false,
  type: "normal",
  keyboardType: "default",
  focusColor: "#40A9FF",
  blurColor: "#D9D9D9",
  countryNumber: "+62",
  contextMenuHidden: true,
};
