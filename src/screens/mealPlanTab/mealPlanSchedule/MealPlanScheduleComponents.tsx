import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Typography from '../../../components/atoms/Typography';
import Dot from '../../../components/atoms/Dot';

interface IProps {
  day: string;
  date: number;
  active?: boolean;
  onPress: () => void;
}

export const ScheduledDateContainer: React.FC<IProps> = ({
  day,
  date,
  active,
  onPress,
}) => {
  const {themeColors} = useTheme();

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: 47,
          height: 72,
          borderRadius: 10,

          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 7,
          backgroundColor: active
            ? themeColors?.switchActiveBg
            : themeColors.background,
        }}>
        <Typography
          size={12}
          weight="medium"
          style={{
            color: active ? themeColors.successText : themeColors.thumbColor,
          }}>
          {day}
        </Typography>
        <Typography
          size={16}
          weight="medium"
          style={{
            color: active ? themeColors.successText : themeColors.thumbColor,
          }}>
          {date}
        </Typography>
        <Dot
          color={active ? themeColors.successText : themeColors.background}
          size={6}
        />
      </View>
    </Pressable>
  );
};
