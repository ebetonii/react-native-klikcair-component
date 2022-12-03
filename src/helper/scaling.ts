import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;


export { scale, verticalScale, moderateScale }