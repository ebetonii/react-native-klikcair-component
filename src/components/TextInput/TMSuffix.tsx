import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {
  CNeutral,
  CNeutral4,
  CNeutral6,
} from '../../assets/styles/index';
import {scale} from '../../helper/scaling';
import {useState} from 'react';
import { fontSize } from "../../assets/styles";


interface TMSuffixProps {
  placeholder?: string;
  onChangeText?: any;
  value?: string;
  disable: boolean;
  size: string;
  icon?: any;
  keyboardType: any;
  maxLength?: number;
  onPressIn?: any;
  focusColor: string;
  blurColor: string;
}
export default function TMSuffix({
  size,
  placeholder,
  onChangeText,
  value,
  disable,
  icon,
  keyboardType,
  maxLength,
  onPressIn,
  focusColor,
  blurColor
}: TMSuffixProps) {
  const [borderColor, setBorderColor] = useState(blurColor);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: disable ? CNeutral4 : CNeutral,
          borderColor: borderColor,
          height:
            size === 'medium'
              ? scale(35)
              : size === 'large'
              ? scale(42)
              : scale(32),
        },
      ]}>
      <TextInput
        style={[
          styles.textInput,
          size === 'medium'
            ? fontSize[14]
            : size === 'large'
            ? fontSize[16]
            : fontSize[12],
        ]}
        onBlur={() => setBorderColor(blurColor)}
        onFocus={() => setBorderColor(focusColor)}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        editable={!disable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onPressIn={onPressIn}
      />
      <Image source={icon} style={[styles.icon]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop:scale(10)
  },
  textInput: {
    width: '80%',
    height: scale(35),
    borderRadius: scale(2),
    
  },
  icon: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    tintColor: CNeutral6,
  },
});
