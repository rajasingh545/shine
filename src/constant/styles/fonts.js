import {Dimensions, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');
export const isIOS = Platform.OS === 'ios' ? true : false;

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
  BANNER_H: 350,
  TOPNAVI_H: 50,
  margin_h_5: hp('0.65%'),
  margin_w_5: wp('1.2%'),
  h_5: hp('0.65%'),
  w_5: wp('1.2%'),
  w_25: wp('5.8%'),
  h_10: hp('1.25%'),
  w_10: wp('2.4%'),
  h_15: hp('1.8%'),
  w_15: wp('3.6%'),
  h_56: hp('7%'),
  // font sizes
  largeTitle: hp('5.15%'),
  h1: hp('3.7%'),
  h2: hp('2.7%'),
  h3: hp('2.45%'),
  h4: hp('2.2%'),
  h5: hp('1.95%'),
  h6: hp('1.8%'),
  body1: hp('3.7%'),
  body2: hp('2.45%'),
  body3: hp('1.95%'),
  body4: hp('1.8%'),
  body5: hp('1.5%'),
  body6: hp('1.24%'),

  icon1: {
    width: hp('3.7%'),
    height: hp('3.7%'),
    resizeMode: 'contain',
  },
  icon2: {
    width: hp('3.1%'),
    height: hp('3.1%'),
    resizeMode: 'contain',
  },
  icon3: {
    width: hp('2.7%'),
    height: hp('2.7%'),
    resizeMode: 'contain',
  },
  icon4: {
    width: hp('2.45%'),
    height: hp('2.45%'),
    resizeMode: 'contain',
  },
  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: hp('2.5%')},
  h4: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h4,
    lineHeight: hp('2.5%'),
  },
  h5: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.h5,
    lineHeight: hp('2.5%'),
  },
  h6: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.body5,
    lineHeight: hp('2.5%'),
  },
  lato_h2: {
    fontFamily: 'Lato-Semibold',
    fontSize: SIZES.h2,
    lineHeight: hp('2.5%'),
  },
  lato_h4: {
    fontFamily: 'Lato-Semibold',
    fontSize: SIZES.h4,
    lineHeight: hp('3%'),
  },
  lato_h5: {
    fontFamily: 'Lato-Semibold',
    fontSize: SIZES.h5,
    lineHeight: hp('3%'),
  },
  lato_body4: {
    fontFamily: 'Lato-Regular',
    fontSize: SIZES.body4,
    lineHeight: hp('3%'),
  },
  lato_body5: {
    fontFamily: 'Lato-Semibold',
    fontSize: SIZES.body5,
    lineHeight: hp('3%'),
  },
  lato_medium5: {
    fontFamily: 'Lato-Medium',
    fontSize: SIZES.body5,
    lineHeight: hp('3%'),
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: hp('3%'),
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: hp('3%'),
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: hp('3%'),
  },
  body6: {
    fontFamily: 'Roboto-Thin',
    fontSize: SIZES.body6,
    lineHeight: hp('3%'),
  },
  lightH4: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.h4,
    lineHeight: hp('3%'),
  },
  light2: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.body2,
    lineHeight: hp('3%'),
  },
  light3: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.body3,
    lineHeight: hp('3%'),
  },
  light4: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.body4,
    lineHeight: hp('3%'),
  },
  light5: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.body5,
    lineHeight: hp('3%'),
  },
};

const appTheme = {SIZES, FONTS, isIOS};

export default appTheme;
