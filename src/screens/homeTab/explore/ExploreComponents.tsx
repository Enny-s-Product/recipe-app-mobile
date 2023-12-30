import {Image, Pressable, PressableProps, StyleSheet, View} from 'react-native';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Typography from '../../../components/atoms/Typography';
import {ReactNode} from 'react';
import generalStyles from '../../../styles';
import {
  CalorieIcon,
  GreenLockIcon,
  TimeGreenIcon,
} from '../../../components/atoms/Icons';

const PIZZA_IMAGE = require('../../../assets/images/pizza.jpg');

interface IQuickSearchContainerProps {
  text: string;
}

export const QuickSearchContainer: React.FC<IQuickSearchContainerProps> = ({
  text,
}) => {
  const {themeColors} = useTheme();

  return (
    <View style={{padding: 5, marginBottom: 24}}>
      <View
        style={{
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: themeColors.fadeBg,
          backgroundColor: themeColors.background,
        }}>
        <View style={{padding: 10}}>
          <Image source={PIZZA_IMAGE} style={{width: '100%', height: '100%'}} />
        </View>
        <Typography size={14} center style={{marginBottom: 10}}>
          {text}
        </Typography>
      </View>
    </View>
  );
};

export const PopularTag = ({children}: {children: ReactNode}) => {
  const {themeColors} = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: 13,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 22,
        marginRight: 10,
        borderColor: themeColors.secondaryBorderColor,
      }}>
      <Typography size={14} weight="medium" color="darkGreen">
        {children}
      </Typography>
    </View>
  );
};

const EXPLORE_IMAGE = require('../../../assets/images/french-toast.jpg');

export const GuidedBadge = () => {
  const {themeColors} = useTheme();
  return (
    <View
      style={[
        generalStyles.flexContainer,

        {
          width: 59,
          height: 20,
          borderRadius: 30,
          backgroundColor: themeColors.background,
          justifyContent: 'center',
        },
      ]}>
      <GreenLockIcon size={10} />
      <Typography
        style={{marginLeft: 2}}
        size={9}
        weight="bold"
        color="success">
        GUIDED
      </Typography>
    </View>
  );
};

interface IExploreCardProps extends PressableProps {}

export const ExploreCard: React.FC<IExploreCardProps> = ({...rest}) => {
  const {themeColors} = useTheme();
  return (
    <Pressable {...rest}>
      <View
        style={[styles.exploreCard, {backgroundColor: themeColors.background}]}>
        <Image style={[styles.exploreCardImage]} source={EXPLORE_IMAGE} />
        <View style={{position: 'absolute', right: 10, top: 10}}>
          <GuidedBadge />
        </View>
        <Typography size={14} weight="bold" style={{marginTop: 16}}>
          Banana French Toast
        </Typography>
        <View style={[generalStyles.flexContainer, {flex: 10, marginTop: 10}]}>
          <View
            style={[
              generalStyles.flexContainer,
              {alignItems: 'flex-end', flex: 5},
            ]}>
            <CalorieIcon />
            <Typography
              style={{marginLeft: 3}}
              size={12}
              weight="medium"
              color="gray">
              320 kcal
            </Typography>
          </View>
          <View
            style={[
              generalStyles.flexContainer,
              {alignItems: 'flex-end', flex: 5},
            ]}>
            <TimeGreenIcon />
            <Typography
              style={{marginLeft: 3}}
              size={12}
              weight="medium"
              color="gray">
              10-15 mins
            </Typography>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  exploreCard: {
    borderRadius: 10,
    paddingTop: 2,
    paddingBottom: 18,
    position: 'relative',
    paddingHorizontal: 5,
    marginBottom: 39,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  exploreCardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
