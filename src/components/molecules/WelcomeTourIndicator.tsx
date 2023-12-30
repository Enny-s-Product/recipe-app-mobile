import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import React from 'react';
import {IWelcomeTourItems} from '../../data/onboarding';

interface IProps {
  data: IWelcomeTourItems[];
  scrollX: Animated.Value;
  index: number;
}

const {width} = Dimensions.get('screen');

const SlideIndicator: React.FC<IProps> = ({data, index, scrollX}) => {
  return (
    <View style={styles.container}>
      {data?.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['transparent', '#FFFFFF', 'transparent'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {backgroundColor, width: dotWidth}]}
            key={idx}></Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 6,
    marginHorizontal: 3,
  },
});

export default SlideIndicator;
