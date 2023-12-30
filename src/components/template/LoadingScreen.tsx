import {View, Text, StyleSheet, Keyboard} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Spinner from '../atoms/Spinner';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

interface IProps {
  loading: boolean;
}

const LoadingScreen = ({loading}: IProps) => {
  const {themeColors} = useTheme();
  const opacityAnimation = useSharedValue(0);
  const translateAnimation = useSharedValue(0);

  // create backdrop animated style
  const backdropAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacityAnimation.value,
    };
  }, []);

  // make alert UI visible
  const reveal = useCallback(() => {
    // update opacity animation
    opacityAnimation.value = withTiming(1, {duration: 200});
    // update translate Y animation
    translateAnimation.value = withTiming(1, {duration: 200});
  }, [opacityAnimation, translateAnimation]);

  useEffect(() => {
    Keyboard.dismiss();
    reveal();
  }, []);

  return !loading ? (
    <></>
  ) : (
    <Animated.View style={[styles.container]}>
      <Animated.View style={[styles.backdrop, backdropAnimatedStyles]}>
        <Animated.View>
          <Spinner color={themeColors.background} />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999, // Adjust the zIndex to ensure the backdrop is above other components
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black color
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default LoadingScreen;
