import {Dimensions, StyleSheet} from 'react-native';
import {SCREEN_HORIZONTAL_SPACING} from '../configs/data.config';

const {width} = Dimensions.get('screen');

const generalStyles = StyleSheet.create({
  body: {
    marginHorizontal: SCREEN_HORIZONTAL_SPACING,
  },
  paddingBody: {
    paddingHorizontal: SCREEN_HORIZONTAL_SPACING,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  buttonContainer: {
    position: 'absolute',
    width: width - SCREEN_HORIZONTAL_SPACING * 2,
    marginLeft: SCREEN_HORIZONTAL_SPACING,
  },
  centralizeItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface IParams {
  width?: number;
  height?: number;
  size?: number;
  radius?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  bgColor?: string;
  bc?: string;
  bw?: number;
}

// If you want to pass style parameters, Use this, Pass an empty object if no params
export const generalStylesWithParams = ({
  size,
  radius,
  width,
  height,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  bgColor,
  bc,
  bw,
}: IParams) => {
  return StyleSheet.create({
    rounded: {
      width: width ? width : size ?? 10,
      height: height ? height : size ?? 10,
      borderRadius: radius ? radius : size ? size / 2 : 5,
      backgroundColor: bgColor && bgColor,
    },
    box: {
      width: width ? width : size ?? 10,
      height: height ? height : size ?? 10,
      backgroundColor: bgColor && bgColor,
    },
    // Use the mb, mt params to adjust the margin
    margin: {
      marginTop: mt && mt,
      marginBottom: mb && mb,
      marginLeft: ml && ml,
      marginRight: mr && mr,
      backgroundColor: bgColor && bgColor,
    },
    // Use the pb, mt.... params to adjust the margin
    padding: {
      paddingTop: pt && pt,
      paddingBottop: pb && pb,
      paddingLeft: pl && pl,
      paddingRight: pr && pr,
      backgroundColor: bgColor && bgColor,
    },
    border: {
      borderWidth: bw && bw,
      borderColor: bc && bc,
    },
  });
};

export default generalStyles;
