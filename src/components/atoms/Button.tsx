import {
  View,
  Text,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React, {ReactNode, useCallback} from 'react';
import {TouchableHighlightProps} from 'react-native-gesture-handler';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import Typography from './Typography';
import generalStyles from '../../styles';

export type IButtonMode =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'inverse'
  | 'successInverse'
  | 'errorInverse'
  | 'success';

interface IProps extends TouchableHighlightProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  mode?: IButtonMode;
  buttonStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  disabled?: boolean;
  fadeBg?: boolean;
  radius?: number;
  rightIcon?: ReactNode;
}

const Button: React.FC<IProps> = ({
  containerStyle,
  children,
  buttonStyle,
  mode,
  isLoading,
  fadeBg,
  disabled,
  radius,
  rightIcon,
  ...rest
}) => {
  const {themeColors} = useTheme();

  const getBackgroundColor = useCallback(
    (mode?: IButtonMode) => {
      switch (mode) {
        case 'base':
          return themeColors.blackButtonBg;
        case 'primary':
          return themeColors.primary;
        case 'success':
          return themeColors.successText;
        case 'successInverse':
          return fadeBg ? themeColors.fadeBg : 'transparent';
        case 'inverse':
          return fadeBg ? themeColors.fadeBg : themeColors.background;
        case 'errorInverse':
          return fadeBg ? themeColors.fadeBg : themeColors.background;
        default:
          return themeColors.blackButtonBg;
      }
    },
    [mode],
  );

  const getTextColor = useCallback(
    (mode?: IButtonMode) => {
      switch (mode) {
        case 'base':
          return themeColors.background;
        case 'primary':
          return themeColors.background;
        case 'successInverse':
          return themeColors.successText;
        case 'inverse':
          return themeColors.primary;
        case 'errorInverse':
          return themeColors.errorText;
        default:
          return themeColors.background;
      }
    },
    [mode],
  );

  const getUnderlayColor = useCallback(
    (mode?: IButtonMode) => {
      switch (mode) {
        case 'base':
          return '#333333';
        case 'primary':
          return '#333333';
        case 'inverse':
          return '#333333';
        case 'successInverse':
          return themeColors.successText;
        default:
          return '#333333';
      }
    },
    [mode],
  );

  const getDisabledColor = useCallback(
    (mode?: IButtonMode) => {
      switch (mode) {
        case 'base':
          return '#CCCCCC';
        case 'primary':
          return '#CCCCCC';
        case 'inverse':
          return '#CCCCCC';
        case 'successInverse':
          return themeColors.successText;
        default:
          return '#CCCCCC';
      }
    },
    [mode],
  );

  return (
    <View style={[containerStyle]}>
      <TouchableHighlight
        disabled={disabled || isLoading}
        underlayColor={getUnderlayColor(mode)}
        {...rest}
        style={[
          styles.button,
          {
            borderRadius: radius ? radius : 4,
            backgroundColor:
              isLoading || disabled
                ? getDisabledColor(mode)
                : getBackgroundColor(mode),
          },
          buttonStyle,
        ]}>
        <View style={[generalStyles.flexContainer]}>
          <Typography
            size={16}
            weight="medium"
            style={{
              color: getTextColor(mode),
            }}>
            {children}
          </Typography>
          {rightIcon && <View style={{marginLeft: 8}}>{rightIcon}</View>}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
