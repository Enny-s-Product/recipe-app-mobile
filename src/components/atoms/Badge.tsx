import {View, Text, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import Typography, {IFontColor} from './Typography';

interface IProps {
  textColor: IFontColor;
  backgroundColor: string;
  radius: number;
  children: ReactNode;
}

const Badge: React.FC<IProps> = ({
  textColor,
  backgroundColor,
  radius,
  children,
}) => {
  return (
    <View style={[styles.container, {borderRadius: radius, backgroundColor}]}>
      <Typography color={textColor} size={12} weight="semi-bold">
        {children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});

export default Badge;
