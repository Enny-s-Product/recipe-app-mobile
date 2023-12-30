import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import {useIsFocused} from '@react-navigation/native';

interface IProps {
  stage: number;
}

const StageIndicator: React.FC<IProps> = ({stage}) => {
  const {themeColors} = useTheme();
  return (
    <View style={styles.indicatorContainer}>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            {
              backgroundColor:
                stage >= index + 1
                  ? themeColors.successText
                  : themeColors.ashBg,
            },
          ]}></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    marginHorizontal: 3,
    height: 6,
    width: 26,
    borderRadius: 4,
    position: 'relative',
  },
});

export default StageIndicator;
