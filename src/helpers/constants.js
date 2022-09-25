import React from 'react';
import {Dimensions,PixelRatio} from 'react-native';
export const FONT_FAMILY = "Inter-Bold.ttf";

export const Fonts = {
    big : 50,
    semiBig : 40,
    medium : 25,
    semiMedium : 20,
    small : 15,
    semiSmall : 10
}

export const Colors = {
    offWhite: '#e0e0e0',
    white: '#F6F6F6',
    whiteBase: '#ffffff',
    appWhite: '#FFFFFF',
    primary: '#003262',
    primaryLight : '#1E5881',
    header : '#1ABA34',
    text : '#1448CF',
    appGreen: '#1ABA34',
    appBlue: '#1448CF',
    appRed: '#E40B18',
    appGrey: '#EDECEC',
    appBlack: '#000000',
    appGreyDeep: '#9E9FA1',
    appGreyDeep2: '#DADADA',
    appTextGrey: '#5B5C5F',
    appCaroGrey: '#9E9FA1',
    appLineGrey: '#D7D5D5',
    appLineColor: '#E5E5E5',
    appAsh : "#989898",
    appPink : "#FAFAFA"
}

const {width, height} = Dimensions.get('window');

export const RH = (val) => {
  let result = (val / 100) * height;
  return result;
};

export const RW = (val) => {
  let result = (val / 100) * width;
  return result;
};

export const RF = (val) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 4;
};

export const RR = (val) => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};