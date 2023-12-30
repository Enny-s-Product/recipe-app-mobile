import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Screen from '../../../components/template/Screen';
import {StackScreenProps} from '@react-navigation/stack';
import {IMealPlansStackParamsList} from '../../../navigators/MealPlansNavigator';
import generalStyles from '../../../styles';
import {Label} from '../../../components/atoms/Typography';
import {MealPlanCard} from '../mealPlans/MealPlanComponents';

type IRecommendedMealPlansProps = React.FC<
  StackScreenProps<IMealPlansStackParamsList, 'RecommendedMealPlans'> & {}
>;

const RecommenededMealPlans: IRecommendedMealPlansProps = ({navigation}) => {
  return (
    <Screen>
      <ScrollView>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={24}>Recommended meal plans</Label>
        </View>

        <View style={[generalStyles.body, {marginTop: 50}]}>
          <MealPlanCard recommendedPlans />
          <MealPlanCard recommendedPlans />
          <MealPlanCard recommendedPlans />
          <MealPlanCard recommendedPlans />
          <MealPlanCard recommendedPlans />
          <MealPlanCard recommendedPlans />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default RecommenededMealPlans;
