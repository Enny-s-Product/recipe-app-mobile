import {
  View,
  StatusBar,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import Screen from '../../../components/template/Screen';
import {StackScreenProps} from '@react-navigation/stack';
import {IMealPlansStackParamsList} from '../../../navigators/MealPlansNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles, {generalStylesWithParams} from '../../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  GreenSaveIcon,
  WhiteArrowLeftIcon,
} from '../../../components/atoms/Icons';
import Typography from '../../../components/atoms/Typography';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../configs/data.config';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Button from '../../../components/atoms/Button';
import MealCard from '../../../components/molecules/cards/MealCard';

type IMealPlanDetailsProps = React.FC<
  StackScreenProps<IMealPlansStackParamsList, 'MealPlanDetails'> & {}
>;

const EXPLORE_IMAGE = require('../../../assets/images/french-toast.jpg');

const MealPlanDetails: IMealPlanDetailsProps = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const {themeColors} = useTheme();
  return (
    <Screen style={{position: 'relative'}}>
      <StatusBar barStyle={top > 0 ? 'light-content' : 'dark-content'} />

      <ImageBackground style={styles.imageBackground} source={EXPLORE_IMAGE}>
        <ScrollView
          contentContainerStyle={[
            {
              marginTop: top + 10,
            },
          ]}>
          <View style={[generalStyles.body]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <WhiteArrowLeftIcon />
            </TouchableOpacity>
            <View style={[{alignItems: 'flex-end'}]}>
              <Typography color="inverse" size={28} weight="bold">
                Low Calorie Diet
              </Typography>
              <View style={[generalStyles.flexContainer, {marginTop: 23}]}>
                <Typography size={16} weight="medium" color="inverse">
                  Save to collection
                </Typography>
                <GreenSaveIcon />
              </View>
            </View>
          </View>
          <View
            style={[
              generalStyles.paddingBody,
              styles.contentContainer,
              {backgroundColor: themeColors.background},
            ]}>
            <Typography size={14} weight="medium" color="secondary">
              This low-calorie diet involves intentionally limiting daily
              calorie intake to promote weight loss or weight maintenance.
            </Typography>
            <View style={[generalStylesWithParams({mt: 31}).margin]}>
              <MealCard
                title="Day 1"
                onPressCard={() => navigation.navigate('MealPlanSchedule')}
              />
              <MealCard title="Day 2" />
              <MealCard title="Day 3" />
              <MealCard title="Day 4" />
              <MealCard title="Day 5" />
            </View>
            <Button
              containerStyle={[
                generalStylesWithParams({mb: bottom + 20, mt: 13}).margin,
              ]}>
              Start plan
            </Button>
          </View>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'contain',
  },
  gradientBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: (SCREEN_HEIGHT * 2) / 5,
  },
  contentContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
    marginTop: 26,
    minHeight: SCREEN_HEIGHT,
  },
});

export default MealPlanDetails;
