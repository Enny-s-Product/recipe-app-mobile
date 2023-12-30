import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navStyles} from './styles';
import {useTheme} from '../providers/themeProvider/ThemeProvider';
import MealPlans from '../screens/mealPlanTab/mealPlans/MealPlans';
import RecommenededMealPlans from '../screens/mealPlanTab/recommendedMealPlans/RecommenededMealPlans';
import MealPlanDetails from '../screens/mealPlanTab/mealPlanDetails/MealPlanDetails';
import MealPlanSchedule from '../screens/mealPlanTab/mealPlanSchedule/MealPlanSchedule';

export type IMealPlansStackParamsList = {
  MealPlans: undefined;
  RecommendedMealPlans: undefined;
  MealPlanDetails: undefined;
  MealPlanSchedule: undefined;
};

const MealPlansNav = createStackNavigator<IMealPlansStackParamsList>();

const MealPlansNavigator = () => {
  const {themeColors} = useTheme();
  return (
    <MealPlansNav.Navigator
      initialRouteName="MealPlans"
      screenOptions={{
        headerStyle: [
          navStyles.defaultHeader,
          {backgroundColor: themeColors.background},
        ],
        headerTitleStyle: [
          navStyles.headerTitle,
          {color: themeColors.blackWhite},
        ],
        headerTitleAlign: 'center',
      }}>
      <MealPlansNav.Screen
        name="MealPlans"
        component={MealPlans}
        options={{
          headerTitle: '',
        }}
      />
      <MealPlansNav.Screen
        name="RecommendedMealPlans"
        component={RecommenededMealPlans}
        options={{
          headerTitle: '',
        }}
      />
      <MealPlansNav.Screen
        name="MealPlanDetails"
        component={MealPlanDetails}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
      <MealPlansNav.Screen
        name="MealPlanSchedule"
        component={MealPlanSchedule}
        options={{
          headerTitle: '',
        }}
      />
    </MealPlansNav.Navigator>
  );
};

export default MealPlansNavigator;
