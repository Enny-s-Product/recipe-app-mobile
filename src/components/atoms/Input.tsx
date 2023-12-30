import {
  View,
  TextInputProps,
  TextInput,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {ReactNode, forwardRef} from 'react';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import generalStyles from '../../styles';
import {ErrorText, IFontColor} from './Typography';

interface IProps extends TextInputProps {
  mb?: number;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  whiteBg?: boolean;
  radius?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputRef?: React.LegacyRef<TextInput> | undefined;
  errorText?: string;
  placeholderTextColor?: string;
  inputStyle?: StyleProp<TextStyle>;
}

const Input: React.FC<IProps> = forwardRef(
  (
    {
      rightIcon,
      containerStyle,
      radius,
      whiteBg,
      mb,
      errorText,
      inputRef,
      inputStyle,
      leftIcon,
      placeholderTextColor,
      ...rest
    },
    ref,
  ) => {
    const {themeColors} = useTheme();
    return (
      <View style={{marginBottom: mb ? mb : 0}}>
        <View
          style={[
            styles.container,
            generalStyles.flexContainer,
            {
              backgroundColor: whiteBg
                ? themeColors.background
                : themeColors.inputBg,
            },
            containerStyle,
          ]}>
          {leftIcon && (
            <View style={{marginLeft: Platform.OS === 'ios' ? 20 : 15}}>
              {leftIcon}
            </View>
          )}

          <TextInput
            {...rest}
            style={[
              styles.input,
              {
                backgroundColor: whiteBg
                  ? themeColors.background
                  : themeColors.inputBg,
                fontWeight: '500',
                borderRadius: radius ? radius : 10,
              },
              inputStyle,
            ]}
            ref={inputRef}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : themeColors.dark
            }
          />
          {rightIcon && (
            <View style={{marginRight: Platform.OS === 'ios' ? 20 : 15}}>
              {rightIcon}
            </View>
          )}
        </View>
        {errorText && <ErrorText> {errorText}</ErrorText>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    position: 'relative',
  },
  input: {
    padding: Platform.OS === 'ios' ? 20 : 15,
    flex: 1,
  },
});

export default Input;
