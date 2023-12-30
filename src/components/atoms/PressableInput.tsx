import {View, Text, Pressable, PressableProps, StyleSheet} from 'react-native';
import React from 'react';
import {INPUT_HEIGHT} from '../../configs/data.config';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import Typography, {ErrorText} from './Typography';
import {PolygonDownIcon} from './Icons';

interface IProps extends PressableProps {
  mb?: number;
  label?: string;
  placeholder?: string;
  placeholderSize?: number;
  errorText?: string;
  noArrow?: boolean;
}

const PressableInput: React.FC<IProps> = ({
  mb,
  label,
  placeholder,
  errorText,
  placeholderSize,
  noArrow,
  ...props
}) => {
  const {themeColors} = useTheme();
  return (
    <>
      <Pressable
        {...props}
        style={[
          styles.container,
          {
            backgroundColor: themeColors.inputBg,
            marginBottom: mb ? mb : 0,
          },
        ]}>
        <Typography
          size={placeholderSize || 14}
          weight="semi-bold"
          color="secondary">
          {placeholder}
        </Typography>
        {!noArrow && <PolygonDownIcon />}
      </Pressable>
      {errorText && (
        <ErrorText style={{marginBottom: errorText ? 24 : 0}}>
          {errorText}
        </ErrorText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    height: INPUT_HEIGHT,
    position: 'relative',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PressableInput;
