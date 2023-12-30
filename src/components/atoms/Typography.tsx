import {
  TextProps,
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import generalStyles from '../../styles';
import {ErrorIcon} from './Icons';

export interface ITypographyProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  weight?: IFontWeight;
  muted?: boolean;
  size?: IFontSize;
  color?: IFontColor;
  center?: boolean;
  title?: boolean;
  mb?: number;
  lh?: number;
}

/**
 * This is used to get the style for the specified font weight.
 * @param weight IFontWeight
 * @returns TextStyle
 */

type IFontSize = number;
type IFontWeight =
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black'
  | 'light';

export type IFontColor =
  | 'primary'
  | 'secondary'
  | 'gray'
  | 'black'
  | 'ash'
  | 'success'
  | 'inverse'
  | 'error'
  | 'lightSuccess'
  | 'fade'
  | 'info'
  | 'darkGreen';

const getWeightStyle = (weight?: IFontWeight) => {
  switch (weight) {
    case 'medium':
      return styles.medium;
    case 'semi-bold':
      return styles.semiBold;
    case 'bold':
      return styles.bold;
    case 'extra-bold':
      return styles.extraBold;
    case 'black':
      return styles.black;
    case 'light':
      return styles.light;
    default:
      return styles.regular;
  }
};

/**
 * This is used to get the style for the specified text size.
 * @param weight IFontWeight
 * @returns TextStyle
 */

const Typography: React.FC<ITypographyProps> = ({
  children,
  style,
  size,
  weight,
  center,
  color,
  lh,
  ...props
}) => {
  const {themeColors} = useTheme();

  const getColor = (color?: IFontColor) => {
    switch (color) {
      case 'primary':
        return themeColors.primary;
      case 'secondary':
        return themeColors.secondary;
      case 'success':
        return themeColors.successText;
      case 'lightSuccess':
        return themeColors.lightSuccessText;
      case 'gray':
        return themeColors.grayText;
      case 'ash':
        return themeColors.ashText;
      case 'inverse':
        return themeColors.background;
      case 'error':
        return themeColors.errorText;
      case 'black':
        return themeColors.blackWhite;
      case 'fade':
        return themeColors.fadeText;
      case 'error':
        return themeColors.errorText;
      case 'info':
        return themeColors.info;
      case 'darkGreen':
        return themeColors.darkgreenText;
      default:
        return themeColors.blackWhite;
    }
  };

  return (
    <Text
      {...props}
      style={[
        getWeightStyle(weight),
        {
          fontSize: size,
          color: getColor(color),
          textAlign: center ? 'center' : 'left',
          lineHeight: lh && lh,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Title: React.FC<ITypographyProps> = ({
  children,
  style,
  size,
  weight,
  center,
  color,
  ...props
}) => {
  const {themeColors} = useTheme();

  const getColor = (color?: IFontColor) => {
    switch (color) {
      case 'primary':
        return themeColors.primary;

      case 'secondary':
        return themeColors.secondary;
      default:
        return themeColors.blackWhite;
    }
  };

  return (
    <Text
      {...props}
      style={[
        weight ? getWeightStyle(weight) : getWeightStyle('bold'),
        {
          fontSize: size ? size : 24,
          color: color ? getColor() : themeColors.blackWhite,
          textAlign: center ? 'center' : 'left',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Label: React.FC<ITypographyProps> = ({
  children,
  style,
  size,
  weight,
  center,
  color,
  mb,
  ...props
}) => {
  const {themeColors} = useTheme();

  const getColor = (color?: IFontColor) => {
    switch (color) {
      case 'primary':
        return themeColors.primary;
      case 'secondary':
        return themeColors.secondary;
      case 'error':
        return themeColors.errorText;
      case 'inverse':
        return themeColors.background;
      default:
        return themeColors.blackWhite;
    }
  };

  return (
    <Text
      {...props}
      style={[
        weight ? getWeightStyle(weight) : getWeightStyle('bold'),
        {
          fontSize: size ? size : 16,
          color: color ? getColor() : themeColors.blackWhite,
          textAlign: center ? 'center' : 'left',
          marginBottom: mb ?? 0,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

interface IErrortextProps extends ITypographyProps {
  icon?: boolean;
  center?: boolean;
}

export const ErrorText: React.FC<IErrortextProps> = ({
  children,
  icon,
  center,
  ...rest
}) => {
  return (
    <View
      style={[
        generalStyles.flexContainer,
        {justifyContent: center ? 'center' : 'flex-start'},
      ]}>
      {icon && (
        <View style={{marginRight: 6}}>
          <ErrorIcon />
        </View>
      )}
      <Typography size={12} {...rest} color="error">
        {children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  medium: {
    fontFamily: 'Gilroy-Medium',
  },
  semiBold: {
    fontFamily: 'Gilroy-Semibold',
  },
  bold: {
    fontFamily: 'Gilroy-Bold',
  },
  extraBold: {
    fontFamily: 'Gilroy-ExtraBold',
  },
  black: {
    fontFamily: 'Gilroy-Black',
  },
  light: {
    fontFamily: 'Gilroy-Light',
  },
  regular: {
    fontFamily: 'Gilroy-Regular',
  },
});

export default Typography;
