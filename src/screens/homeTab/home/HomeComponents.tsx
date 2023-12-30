import {
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import generalStyles from '../../../styles';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../../components/atoms/Typography';
import {
  GreenLockIcon,
  InfoArrowRightIcon,
  SuccessArrowRightIcon,
  TimeIcon,
} from '../../../components/atoms/Icons';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {ReactNode} from 'react';
import {act} from 'react-test-renderer';
import Spagetti from '../../../assets/icons/spagetti.svg';

const IMAGE = require('../../../assets/images/pizza.jpg');
const width = 124;
const height = 145;

export const RecommendationsCard = () => {
  return (
    <ImageBackground
      style={{width, height, borderRadius: 20, marginRight: 16}}
      source={IMAGE}
      borderRadius={13}>
      <LinearGradient
        pointerEvents="none"
        style={[{width, height, borderRadius: 13}]}
        colors={[
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.4)',
          'rgba(0, 0, 0, 1)',
        ]}>
        <View
          style={[
            {
              justifyContent: 'space-between',
              height,
              paddingVertical: 10,
              paddingHorizontal: 8,
            },
          ]}>
          <View
            style={[generalStyles.flexContainer, {justifyContent: 'flex-end'}]}>
            <PremiumBadge />
          </View>
          <Typography size={10} color="inverse" weight="medium">
            POACHED BANANA TOAST
          </Typography>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const PremiumBadge = () => {
  const {themeColors} = useTheme();

  return (
    <View
      style={[
        generalStyles.flexContainer,
        {
          borderRadius: 30,
          width: 59,
          height: 20,
          backgroundColor: themeColors.background,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <GreenLockIcon />
      <Typography
        size={9}
        weight="medium"
        style={{marginLeft: 1}}
        color="success">
        PREMIUM
      </Typography>
    </View>
  );
};

interface IHeaderAndSeeAllButtonProps {
  text: string;
  onPress?: () => void;
  hideButton?: boolean;
  successBtn?: boolean;
}

export const HeaderAndSeeAllButton: React.FC<IHeaderAndSeeAllButtonProps> = ({
  text,
  onPress,
  hideButton,
  successBtn,
}) => {
  return (
    <View
      style={[generalStyles.flexContainer, {justifyContent: 'space-between'}]}>
      <Typography size={20} weight="bold">
        {text}
      </Typography>
      {!hideButton && (
        <TouchableOpacity onPress={onPress}>
          <View style={[generalStyles.flexContainer]}>
            <Typography
              color={successBtn ? 'success' : 'info'}
              style={{marginRight: 4}}
              weight="bold">
              See all
            </Typography>
            {successBtn ? <SuccessArrowRightIcon /> : <InfoArrowRightIcon />}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const BURGER_IMAGE = require('../../../assets/images/burger.jpg');

interface IRecentRecipeContainer {
  headerText: string;
  text: string;
}

export const RecentRecipeContainer: React.FC<IRecentRecipeContainer> = ({
  headerText,
  text,
}) => {
  return (
    <View style={{width: 124, marginRight: 16}}>
      <Image
        source={BURGER_IMAGE}
        style={{width: 124, height: 124, borderRadius: 10}}
      />
      <Typography size={14} weight="bold" style={{marginTop: 8}}>
        {headerText}
      </Typography>
      <Typography size={12} weight="medium" color="fade" style={{marginTop: 3}}>
        {text}
      </Typography>
    </View>
  );
};

interface IPopularCategoryTabProps {
  active?: boolean;
  onPress?: () => void;
  children?: ReactNode;
}

export const PopularCategoryTab: React.FC<IPopularCategoryTabProps> = ({
  onPress,
  active,
  children,
}) => {
  const {themeColors} = useTheme();
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 10,
          backgroundColor: active ? themeColors.info : themeColors.background,
        }}>
        <Typography
          size={12}
          weight="bold"
          color={!active ? 'info' : 'inverse'}>
          {children}
        </Typography>
      </View>
    </Pressable>
  );
};

interface IPopularCategpryContainerProps {}

const PIZZA_IMAGE = require('../../../assets/images/pizza.jpg');

export const PopularCategoryContainer: React.FC<
  IPopularCategpryContainerProps
> = ({}) => {
  const {themeColors} = useTheme();
  return (
    <View style={{position: 'relative', marginRight: 16}}>
      <View
        style={{
          width: 150,
          height: 176,
          borderRadius: 12,
          paddingHorizontal: 8,
          paddingVertical: 12,
          backgroundColor: themeColors.grayBg,
        }}>
        <Typography style={{marginTop: 66}} weight="bold" center size={14}>
          Pepper sweetcorn ramen
        </Typography>
        <Typography style={{marginTop: 18}} size={12} color="secondary">
          Time
        </Typography>
        <View
          style={[
            generalStyles.flexContainer,
            {justifyContent: 'space-between', marginTop: 5},
          ]}>
          <Typography size={12} weight="semi-bold">
            10 Mins
          </Typography>
          <TimeIcon />
        </View>
      </View>
      <View style={{alignSelf: 'center', position: 'absolute', top: -70}}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Image
            source={PIZZA_IMAGE}
            style={{
              width: 110,
              height: 110,
              borderRadius: 55,
            }}
          />
        </View>
      </View>
    </View>
  );
};
