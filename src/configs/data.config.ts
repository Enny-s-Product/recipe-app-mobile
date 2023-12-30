import {Dimensions} from 'react-native';

// Styles
export const INPUT_HEIGHT = 50;
export const INPUT_HEIGHT_SMALL = 32;
export const SCREEN_HORIZONTAL_SPACING = 20;
export const BOTTOMSHEET_HORIZONTAL_MARGIN = 20;
export const SCREEN_VERTICAL_MARGIN = 32;
export const INPUT_MARGIN_BOTTOM = 24;
export const HIT_SLOP = (
  value: number,
): {top: number; left: number; right: number; bottom: number} => {
  return {
    top: value,
    bottom: value,
    right: value,
    left: value,
  };
};
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
