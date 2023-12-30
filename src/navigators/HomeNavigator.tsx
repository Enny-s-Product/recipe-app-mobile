import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navStyles} from './styles';
import {useTheme} from '../providers/themeProvider/ThemeProvider';
import Home from '../screens/homeTab/home/Home';
import HomeHeaderLeft from '../screens/homeTab/home/HomeHeaderLeft';
import HomeHeaderRight from '../screens/homeTab/home/HomeHeaderRight';
import Explore from '../screens/homeTab/explore/Explore';
import Filter from '../screens/homeTab/filter/Filter';
import Profile from '../screens/homeTab/profile/Profile';
import EditProfile from '../screens/homeTab/editProfile/EditProfile';
import ManageNotifications from '../screens/homeTab/manageNotifications/ManageNotifications';
import ManageSubscriptions from '../screens/homeTab/manageSubscriptions/ManageSubscriptions';
import Preferences from '../screens/homeTab/preferences/Preferences';
import Notifications from '../screens/homeTab/notifications/Notifications';

export type IHomeStackParamsList = {
  Home: undefined;
  Notifications: undefined;
  Explore: undefined;
  Filter: undefined;
  Profile: undefined;
  EditProfile: undefined;
  ManageNotifications: undefined;
  ManageSubscriptions: undefined;
  Preferences: undefined;
};

const HomeNav = createStackNavigator<IHomeStackParamsList>();

const HomeNavigator = () => {
  const {themeColors} = useTheme();
  return (
    <HomeNav.Navigator
      initialRouteName="Home"
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
      <HomeNav.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
        }}
      />
      <HomeNav.Screen
        name="Explore"
        component={Explore}
        options={{
          headerTitle: '',
        }}
      />
      <HomeNav.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerTitle: '',
        }}
      />
      <HomeNav.Screen
        name="Filter"
        component={Filter}
        options={{
          headerTitle: '',
        }}
      />
      <HomeNav.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: '',
        }}
      />
      <HomeNav.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: '',
        }}
      />
      <HomeNav.Screen
        name="ManageNotifications"
        component={ManageNotifications}
        options={{
          headerTitle: '',
        }}
      />
      <HomeNav.Screen
        name="ManageSubscriptions"
        component={ManageSubscriptions}
        options={{
          headerTitle: '',
        }}
      />
      <HomeNav.Screen
        name="Preferences"
        component={Preferences}
        options={{
          headerTitle: '',
        }}
      />
    </HomeNav.Navigator>
  );
};

export default HomeNavigator;
