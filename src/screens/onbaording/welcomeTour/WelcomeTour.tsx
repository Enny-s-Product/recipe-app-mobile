import {
  View,
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  Animated,
  NativeScrollEvent,
  ViewToken,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import Button from '../../../components/atoms/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Screen from '../../../components/template/Screen';
import {welcomeTourItems} from '../../../data/onboarding';
import WelcomeTourSlideItem from '../../../components/molecules/WelcomeTourSlideItems';
import {SCREEN_HORIZONTAL_SPACING} from '../../../configs/data.config';
import WelcomeTourIndicator from '../../../components/molecules/WelcomeTourIndicator';
import Typography from '../../../components/atoms/Typography';
import {useConfig} from '../../../providers/configProvider/ConfigProvider';

type IWelcomeTourProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'WelcomeTour'> & {}
>;

const {width} = Dimensions.get('screen');

const WelcomeTour: IWelcomeTourProps = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);
  const {completeReady, handleOnboardingState} = useConfig();

  //   const {completeReady, handleOnboardingState} = useConfig();

  const {bottom} = useSafeAreaInsets();

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Animated.event
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {useNativeDriver: false},
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setIndex(viewableItems[0]?.index ?? 0);
    },
  ).current;

  const viewabliltyConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleGoNext = () => {
    if (!scrollRef.current) return;
    const newIndex = (indexRef.current + 1) % welcomeTourItems.length;
    scrollRef.current.scrollToIndex({index: newIndex, animated: true});
    indexRef.current = newIndex;
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleGoNext, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Screen>
      <StatusBar barStyle="dark-content" hidden />
      <View style={styles.container}>
        <FlatList
          data={welcomeTourItems}
          renderItem={({item}) => <WelcomeTourSlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabliltyConfig}
          onScroll={handleOnScroll}
          ref={scrollRef}
        />
      </View>
      <View style={[styles.indicatorContainer, {bottom: bottom + 120}]}>
        <WelcomeTourIndicator
          data={welcomeTourItems}
          scrollX={scrollX}
          index={index}
        />
      </View>
      <View style={[styles.buttonsContainer, {bottom: bottom + 30}]}>
        <Button
          containerStyle={{marginBottom: 12}}
          onPress={() => {
            completeReady();
            handleOnboardingState('signup');
            navigation.replace('GetStarted');
          }}>
          Get Started
        </Button>
        <Typography size={14} color={'inverse'} weight="bold" center>
          Already have an account?{' '}
          <Typography
            size={14}
            color={'inverse'}
            weight="bold"
            onPress={() => {
              completeReady();
              handleOnboardingState('login');
              navigation.replace('Login');
            }}>
            Sign in
          </Typography>
        </Typography>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  buttonsContainer: {
    marginHorizontal: SCREEN_HORIZONTAL_SPACING,
    position: 'absolute',
    width: width - SCREEN_HORIZONTAL_SPACING * 2,
  },
});

export default WelcomeTour;
