import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navStyles} from './styles';
import {useTheme} from '../providers/themeProvider/ThemeProvider';
import SavedRecipes from '../screens/recipesTab/savedRecipes/SavedRecipes';
import RecipeDetails from '../screens/recipesTab/recipeDetails/RecipeDetails';

export type IRecipesStackParamsList = {
  SavedRecipes: undefined;
  RecipeDetails: undefined;
};

const MealPlansNav = createStackNavigator<IRecipesStackParamsList>();

const RecipesNavigator = () => {
  const {themeColors} = useTheme();
  return (
    <MealPlansNav.Navigator
      initialRouteName="SavedRecipes"
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
        name="SavedRecipes"
        component={SavedRecipes}
        options={{
          headerTitle: '',
        }}
      />

      <MealPlansNav.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{
          headerShown: false,
        }}
      />
    </MealPlansNav.Navigator>
  );
};

export default RecipesNavigator;
