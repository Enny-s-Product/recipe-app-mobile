import {DefaultTheme, DarkTheme as RNDarkTheme} from '@react-navigation/native';

/**
 * @deprecated use theme color
 */
const colors = {};

export type IThemeColor =
  | 'primary'
  | 'background'
  | 'secondary'
  | 'blackWhite'
  | 'grayText'
  | 'successText'
  | 'errorText'
  | 'ashText'
  | 'inputBg'
  | 'dark'
  | 'blackButtonBg'
  | 'lineColor'
  | 'socialMediaButton'
  | 'socialMediaButtonBorder'
  | 'otpBorderColor'
  | 'fadeBg'
  | 'ashBg'
  | 'borderColor'
  | 'lightSuccessText'
  | 'tabbarInactive'
  | 'fadeText'
  | 'info'
  | 'grayBg'
  | 'inputIconBg'
  | 'secondaryBorderColor'
  | 'darkgreenText'
  | 'switchActiveBg'
  | 'thumbColor'
  | 'activeThumbColor'
  | 'switchInactiveBg';

export const DarkThemeColors: Record<IThemeColor, string> = {
  ...RNDarkTheme.colors,
  background: '#FFFFFF',
  blackWhite: '#000000',
  secondary: '#858585',
  primary: '#007BFF',
  grayText: '#BEBEBE',
  successText: '#00D291',
  errorText: '#E11717',
  ashText: '#3B3B3B',
  inputBg: '#F5F5F5',
  dark: '#212121',
  blackButtonBg: '#0D0D0D',
  lineColor: '#5C5B5B',
  socialMediaButton: '#FAFAFA',
  socialMediaButtonBorder: '#F3F3F3',
  otpBorderColor: '#757575',
  fadeBg: '#F5F5F5',
  ashBg: '#E3E3E3',
  borderColor: '#E7E7E7',
  lightSuccessText: '#96EDD2',
  tabbarInactive: '#B0B0B0',
  fadeText: '#A09D9D',
  info: '#FFA634',
  grayBg: '#F1F1F1',
  inputIconBg: '#1C1C1C',
  secondaryBorderColor: '#DEDEDE',
  darkgreenText: '#004831',
  switchActiveBg: '#E6FBF4',
  thumbColor: '#BFBFBF',
  activeThumbColor: '#00D291',
  switchInactiveBg: '#F5F5F5',
};

export const LightThemeColors: Record<IThemeColor, string> = {
  ...DefaultTheme.colors,
  background: '#FFFFFF',
  blackWhite: '#000000',
  secondary: '#858585',
  primary: '#007BFF',
  grayText: '#BEBEBE',
  successText: '#00D291',
  errorText: '#E11717',
  ashText: '#3B3B3B',
  inputBg: '#F5F5F5',
  dark: '#212121',
  blackButtonBg: '#0D0D0D',
  lineColor: '#5C5B5B',
  socialMediaButton: '#FAFAFA',
  socialMediaButtonBorder: '#F3F3F3',
  otpBorderColor: '#757575',
  fadeBg: '#F5F5F5',
  ashBg: '#E3E3E3',
  borderColor: '#E7E7E7',
  lightSuccessText: '#96EDD2',
  tabbarInactive: '#B0B0B0',
  fadeText: '#A09D9D',
  info: '#FFA634',
  grayBg: '#F1F1F1',
  inputIconBg: '#1C1C1C',
  secondaryBorderColor: '#DEDEDE',
  darkgreenText: '#004831',
  switchActiveBg: '#E6FBF4',
  thumbColor: '#BFBFBF',
  activeThumbColor: '#00D291',
  switchInactiveBg: '#F5F5F5',
};

export default colors;
