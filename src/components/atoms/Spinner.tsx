import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Platform,
  ActivityIndicatorProps,
} from 'react-native';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';

type ISpinnerProps = React.FC<
  ActivityIndicatorProps & {
    color?: string;
    dark?: boolean;
    size?: 'small' | 'large';
  }
>;

const Spinner: ISpinnerProps = function Spinner({
  color,
  size,
  style,
  dark,
  ...props
}) {
  const {themeColors} = useTheme();
  const indicatorColor = color
    ? color
    : dark
    ? themeColors.blackWhite
    : Platform.select({
        ios: themeColors.blackWhite,
        android: themeColors.primary,
      });
  return (
    <ActivityIndicator
      color={indicatorColor}
      size={size}
      {...props}
      style={[styles.spinner, style]}
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginBottom: -4,
  },
});

/**
 * Set spinner default props, we want to
 * default to a small light theme spinner always
 */
Spinner.defaultProps = {
  size: 'small',
  dark: true,
};

export default Spinner;
