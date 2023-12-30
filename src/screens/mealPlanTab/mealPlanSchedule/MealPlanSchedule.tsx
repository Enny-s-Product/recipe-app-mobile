import {View, ScrollView} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IMealPlansStackParamsList} from '../../../navigators/MealPlansNavigator';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography, {Label} from '../../../components/atoms/Typography';
import generalStyles, {generalStylesWithParams} from '../../../styles';
import {useMealPlanSchedule} from './mealPlanSchedule.hook';
import {ScheduledDateContainer} from './MealPlanScheduleComponents';
import {SCREEN_HORIZONTAL_SPACING} from '../../../configs/data.config';
import MealCard from '../../../components/molecules/cards/MealCard';

type IMealPlanScheduleProps = React.FC<
  StackScreenProps<IMealPlansStackParamsList, 'MealPlanSchedule'> & {}
>;

const MealPlanSchedule: IMealPlanScheduleProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const {
    reArrangedDays,
    selectedDate,
    setSelectedDate,
    index,
    getDateFromIndex,
    setIndex,
    getFullDateFromIndex,
  } = useMealPlanSchedule();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={24}>My meal plans</Label>
          <Typography
            size={20}
            weight="semi-bold"
            style={[generalStylesWithParams({mt: 19}).margin]}>
            Low Calorie Diet
          </Typography>
        </View>
        <View
          style={[
            generalStylesWithParams({ml: SCREEN_HORIZONTAL_SPACING}).margin,
            {marginTop: 30},
          ]}>
          <Typography
            center
            style={[generalStylesWithParams({mb: 13}).margin]}
            size={16}
            weight="semi-bold"
            color="success">
            {getFullDateFromIndex(index)}
          </Typography>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {reArrangedDays.map((item, index) => {
              return (
                <ScheduledDateContainer
                  key={index}
                  active={selectedDate === getDateFromIndex(index)}
                  day={item?.label}
                  date={getDateFromIndex(index)}
                  onPress={() => {
                    setIndex(index);
                    setSelectedDate(getDateFromIndex(index));
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={[
            generalStyles.body,
            generalStylesWithParams({mt: 40}).margin,
          ]}>
          <MealCard
            title="Meatballs and Spinach"
            text="Today’s Breakfast"
            height={91}
            showIcon
            showRating
          />
          <MealCard
            title="Meatballs and Spinach"
            text="Today’s Breakfast"
            height={91}
            showIcon
            showRating
          />
          <MealCard
            title="Meatballs and Spinach"
            text="Today’s Breakfast"
            height={91}
            showIcon
            showRating
          />
          <MealCard
            title="Meatballs and Spinach"
            text="Today’s Breakfast"
            height={91}
            showIcon
            showRating
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default MealPlanSchedule;
