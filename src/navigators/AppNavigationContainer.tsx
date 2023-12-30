import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import OnboardingNavigator from './OnboardingNavigator';
import TabNavigator from './TabNavigator';

export const navigationRef = createNavigationContainerRef();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <OnboardingNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
