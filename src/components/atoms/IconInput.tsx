import {
  View,
  TextInputProps,
  TextInput,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
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
  placeholderTextColor?: IFontColor;
  onPressIcon?: () => void;
}

const IconInput: React.FC<IProps> = forwardRef(
  (
    {
      rightIcon,
      containerStyle,
      radius,
      whiteBg,
      mb,
      errorText,
      inputRef,
      leftIcon,
      onPressIcon,
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
                fontWeight: '300',
                borderRadius: radius ? radius : 10,
              },
            ]}
            placeholder="Search recipes"
            ref={inputRef}
            placeholderTextColor={themeColors.secondary}
          />

          <TouchableOpacity onPress={onPressIcon}>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: themeColors.inputIconBg},
              ]}>
              {rightIcon}
            </View>
          </TouchableOpacity>
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
    paddingLeft: 5,
    // paddingVertical: Platform.OS === 'ios' ? 20 : 15,
    flex: 1,
  },
  iconContainer: {
    width: 45,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 4,
  },
});

export default IconInput;
