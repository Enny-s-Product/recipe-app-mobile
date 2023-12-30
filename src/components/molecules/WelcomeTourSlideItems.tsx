import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import Typography from '../atoms/Typography';
import {IWelcomeTourItems} from '../../data/onboarding';
import {SCREEN_HORIZONTAL_SPACING} from '../../configs/data.config';

interface IProps {
  item: IWelcomeTourItems;
}

const {width, height} = Dimensions.get('window');

const IMAGE_HEIGHT = height * (4 / 5);

const WelcomeTourSlideItem: React.FC<IProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Typography
        center
        size={28}
        weight="bold"
        style={{marginHorizontal: SCREEN_HORIZONTAL_SPACING}}>
        {item?.title}
      </Typography>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: height,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: width,
    height,
    flex: 1,
    resizeMode: 'contain',
  },
  content: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 200,
    marginTop: 10,
    marginHorizontal: SCREEN_HORIZONTAL_SPACING,
  },
  gradientBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: (height - IMAGE_HEIGHT) * 1,
    height: IMAGE_HEIGHT,
  },
});

export default WelcomeTourSlideItem;
