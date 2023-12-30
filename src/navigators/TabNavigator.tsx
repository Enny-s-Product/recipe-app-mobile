import {StyleSheet, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '../providers/themeProvider/ThemeProvider';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import {
  HomeActiveIcon,
  HomeIcon,
  MealPlanActiveIcon,
  MealPlanIcon,
  RecipeActiveIcon,
  RecipeIcon,
  SettingsActiveIcon,
  SettingsIcon,
} from '../components/atoms/Icons';
import MealPlansNavigator from './MealPlansNavigator';
import RecipesNavigator from './RecipesNavigator';

export type ITabStackParamsList = {
  HomeTab: undefined;
  MealPlanTab: undefined;
  RecipeTab: undefined;
  SettingsTab: undefined;
};

const TAB_ICON_SIZE = 24;

const TabNav = createBottomTabNavigator<ITabStackParamsList>();

const shouldShowTab = (route: any): boolean => {
  // hide list
  const showAt = ['Home', 'MealPlans', 'SavedRecipes'];
  // get current route
  const routeName = getFocusedRouteNameFromRoute(route);
  // check if route name is in hide list
  return routeName && showAt.indexOf(routeName) === -1 ? false : true;
};

const TabNavigator = () => {
  const {themeColors} = useTheme();
  const {bottom} = useSafeAreaInsets();

  const tabbarHeight = Platform.OS === 'android' ? 60 : 55;

  return (
    <TabNav.Navigator
      screenOptions={({}) => ({
        tabBarStyle: [
          styles.tabBar,
          {
            backgroundColor: themeColors.background,
            height: bottom + tabbarHeight,
            paddingBottom: Platform.OS === 'ios' ? bottom : bottom + 20,
            paddingTop: 5,
          },
        ],
        tabBarLabelStyle: styles.label,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: themeColors.blackWhite,
        tabBarInactiveTintColor: themeColors.tabbarInactive,
      })}>
      <TabNav.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={({route}) => {
          return {
            tabBarLabel: 'Home',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <HomeActiveIcon color={color} size={TAB_ICON_SIZE} />
              ) : (
                <HomeIcon color={color} size={TAB_ICON_SIZE} />
              ),
            headerShown: false,
            tabBarStyle: {
              display: shouldShowTab(route) ? 'flex' : 'none',
              height: bottom + tabbarHeight,
            },
            tabBarLabelStyle: {
              marginBottom: 10,
              fontWeight: '500',
            },
          };
        }}
      />
      <TabNav.Screen
        name="MealPlanTab"
        component={MealPlansNavigator}
        options={({route}) => {
          return {
            tabBarLabel: 'Meal Plan',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <MealPlanActiveIcon color={color} size={TAB_ICON_SIZE} />
              ) : (
                <MealPlanIcon color={color} size={TAB_ICON_SIZE} />
              ),
            headerShown: false,
            tabBarStyle: {
              display: shouldShowTab(route) ? 'flex' : 'none',
              height: bottom + tabbarHeight,
            },
            tabBarLabelStyle: {
              marginBottom: 10,
              fontWeight: '500',
            },
          };
        }}
      />
      <TabNav.Screen
        name="RecipeTab"
        component={RecipesNavigator}
        options={({route}) => {
          return {
            tabBarLabel: 'My Recipes',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <RecipeActiveIcon color={color} size={TAB_ICON_SIZE} />
              ) : (
                <RecipeIcon color={color} size={TAB_ICON_SIZE} />
              ),
            headerShown: false,
            tabBarStyle: {
              display: shouldShowTab(route) ? 'flex' : 'none',
              height: bottom + tabbarHeight,
            },
            tabBarLabelStyle: {
              marginBottom: 10,
              fontWeight: '500',
            },
          };
        }}
      />
      <TabNav.Screen
        name="SettingsTab"
        component={HomeNavigator}
        options={({route}) => {
          return {
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <SettingsActiveIcon color={color} size={TAB_ICON_SIZE} />
              ) : (
                <SettingsIcon color={color} size={TAB_ICON_SIZE} />
              ),
            headerShown: false,
            tabBarStyle: {
              display: shouldShowTab(route) ? 'flex' : 'none',
              height: bottom + tabbarHeight,
            },
            tabBarLabelStyle: {
              marginBottom: 10,
              fontWeight: '500',
            },
          };
        }}
      />
    </TabNav.Navigator>
  );
};

const styles = StyleSheet.create({
  insuranceIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: TAB_ICON_SIZE,
    height: TAB_ICON_SIZE,
  },
  tabBar: {
    borderTopColor: 'rgba(0, 0, 0, 0)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 11,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Averta-Regular',
  },
});

export default TabNavigator;
