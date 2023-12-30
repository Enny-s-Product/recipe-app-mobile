import {
  View,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleSheet,
} from 'react-native';
import React, {ReactNode, useCallback, useEffect} from 'react';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ErrorText} from './Typography';

interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  mainContainerStyle?: StyleProp<ViewStyle>;
  errorText?: string;
  small?: boolean;
  placeholderText: string;
  applyMargin?: boolean;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  label?: string;
}

export const INPUT_HEIGHT = 56;
export const INPUT_HEIGHT_SMALL = 32;

const Input: React.FC<InputProps> = ({
  style,
  mainContainerStyle,
  placeholder,
  onFocus,
  onBlur,
  keyboardType,
  returnKeyType,
  value,
  placeholderText,
  applyMargin,
  label,
  leftIcon,
  errorText,
  icon,
  multiline,
  ...props
}) => {
  const inputRef = React.useRef<TextInput>(null);
  const [focused, setFocused] = React.useState<boolean>(false);
  const {themeColors} = useTheme();
  const placeholderTopAnimation = useSharedValue(18);
  const placeholderLeftAnimation = useSharedValue(leftIcon ? 25 : 12);
  const placeholderFontAnimation = useSharedValue(16);

  const placeholderAnimatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: placeholderTopAnimation.value,
      left: placeholderLeftAnimation.value,
      paddingHorizontal: 5,
      fontSize: placeholderFontAnimation.value,
      fontFamily: 'Averta-Semibold',
    };
  }, []);

  const animatePlaceHolderIn = useCallback(() => {
    placeholderTopAnimation.value = withTiming(3, {duration: 200});
    placeholderFontAnimation.value = withTiming(12, {duration: 200});
  }, []);

  const animatePlaceHolderOut = useCallback(() => {
    placeholderTopAnimation.value = withTiming(18, {duration: 200});
    placeholderFontAnimation.value = withTiming(14, {duration: 200});
  }, []);

  const handleOnFocus = useCallback(
    function handleOnFocus(ev: NativeSyntheticEvent<TextInputFocusEventData>) {
      if (onFocus) {
        onFocus(ev);
      }
      setFocused(true);
    },
    [onFocus],
  );

  const handleOnBlur = useCallback(
    function handleOnBlur(ev: NativeSyntheticEvent<TextInputFocusEventData>) {
      if (onBlur) {
        onBlur(ev);
      }
      setFocused(false);
    },
    [onBlur],
  );

  const handlePressPlaceholder = useCallback(() => {
    if (value && value.trim().length > 0) {
      return;
    }
    if (focused && (!value || value.trim().length === 0)) {
      return;
    }
    if (!focused && (!value || value.trim().length === 0)) {
      inputRef.current?.focus();
    }
  }, [focused, value]);

  // Handles animating the placeholder onblur and focus
  const handleAnimate = useCallback(() => {
    if (value && value.trim().length === 0) {
      return animatePlaceHolderOut();
    }
    if (focused && (!value || value.trim().length === 0)) {
      return animatePlaceHolderIn();
    }
    if (!focused && (!value || value.trim().length === 0)) {
      return animatePlaceHolderOut();
    }
  }, [focused, value]);

  useEffect(() => {
    handleAnimate();
  }, [focused]);

  return (
    <View style={[mainContainerStyle, {marginBottom: applyMargin ? 24 : 0}]}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: themeColors.inputBg,
            height: multiline ? 100 : INPUT_HEIGHT,
          },
        ]}>
        {leftIcon && <View style={{marginLeft: 10}}>{leftIcon}</View>}
        <TextInput
          {...props}
          keyboardType={keyboardType}
          returnKeyType={
            keyboardType === 'number-pad' || keyboardType === 'numeric'
              ? 'done'
              : returnKeyType
          }
          placeholder={multiline ? placeholderText : ''}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={inputRef}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          style={[
            {
              color: themeColors.blackWhite,
              paddingHorizontal: leftIcon ? 8 : 16,
            },
            styles.input,
            style,
          ]}
        />

        {!multiline && (
          <Animated.Text
            style={[
              placeholderAnimatedStyle,
              {
                color: themeColors.secondary,
              },
            ]}
            onPress={handlePressPlaceholder}>
            {placeholderText}
          </Animated.Text>
        )}
        {icon && <View style={{marginRight: 10}}>{icon}</View>}
      </Animated.View>
      {errorText && errorText.trim() && (
        <ErrorText style={{marginTop: 2}}>{errorText}</ErrorText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 4,
    height: INPUT_HEIGHT,
    position: 'relative',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
  },
  inputContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 8,
  },
});

// export Input component as this modules default
export default Input;
