import {Image, Pressable, StyleSheet, View} from 'react-native';
import generalStyles, {generalStylesWithParams} from '../../../styles';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {
  ActiveStarIcon,
  CalorieIcon,
  CutleryIcon,
  MoreHorizontalIcon,
  TimeGreenIcon,
} from '../../atoms/Icons';
import Typography from '../../atoms/Typography';

const MEAT_BALLS_IMAGE = require('../../../assets/images/meat-balls.jpeg');

interface IMealCardProps {
  title: string;
  text?: string;
  onPressCard?: () => void;
  height?: number;
  showIcon?: boolean;
  showRating?: boolean;
}

const MealCard: React.FC<IMealCardProps> = ({
  title,
  onPressCard,
  text,
  height,
  showIcon,
  showRating,
}) => {
  const {themeColors} = useTheme();
  return (
    <Pressable onPress={onPressCard}>
      <View
        style={[
          generalStyles.flexContainer,
          styles.mealCard,
          {backgroundColor: themeColors.background},
        ]}>
        <Image
          style={[styles.mealCardImage, {height: height ?? 84}]}
          source={MEAT_BALLS_IMAGE}
        />
        <View style={[generalStylesWithParams({ml: 15}).margin, {flex: 1}]}>
          <View
            style={[
              generalStyles.flexContainer,
              generalStyles.justifyBetween,
              generalStylesWithParams({mb: 7, mr: 11}).margin,
            ]}>
            <Typography size={12} color="secondary">
              {text}
            </Typography>
            {showIcon && (
              <Pressable>
                <MoreHorizontalIcon />
              </Pressable>
            )}
          </View>
          <Typography size={16} weight="semi-bold">
            {title}
          </Typography>
          <View style={[styles.mealContentContainer]}>
            {!showRating && (
              <View
                style={[
                  generalStyles.flexContainer,
                  generalStylesWithParams({mr: 6}).margin,
                ]}>
                <CutleryIcon />
                <Typography size={12} weight="medium" color="ash">
                  4 Recipes
                </Typography>
              </View>
            )}
            {showRating && (
              <View
                style={[
                  generalStyles.flexContainer,
                  generalStylesWithParams({mr: 6}).margin,
                ]}>
                <ActiveStarIcon size={18} />
                <Typography size={12} weight="medium" color="ash">
                  4.7
                </Typography>
              </View>
            )}
            <View
              style={[
                generalStyles.flexContainer,
                generalStylesWithParams({mr: 6}).margin,
              ]}>
              <CalorieIcon />
              <Typography
                size={12}
                weight="medium"
                color="ash"
                style={generalStylesWithParams({ml: 2}).margin}>
                320 kcal
              </Typography>
            </View>
            <View
              style={[
                generalStyles.flexContainer,
                generalStylesWithParams({mr: 6}).margin,
              ]}>
              <TimeGreenIcon />
              <Typography
                size={12}
                weight="medium"
                color="ash"
                style={[generalStylesWithParams({ml: 2}).margin]}>
                10-15 mins
              </Typography>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mealCard: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginBottom: 18,
  },
  mealCardImage: {
    width: 84,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  mealContentContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginRight: 11,
  },
});

export default MealCard;
