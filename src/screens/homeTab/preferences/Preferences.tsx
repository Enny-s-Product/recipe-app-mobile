import {View, Text, ScrollView, Switch} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Typography, {Label} from '../../../components/atoms/Typography';
import generalStyles from '../../../styles';
import {PreferecesItem} from './PreferencesComponents';

type IManageNotificationProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'Preferences'> & {}
>;

const Preferences: IManageNotificationProps = () => {
  const {bottom} = useSafeAreaInsets();
  const {themeColors} = useTheme();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={20}>Preferences</Label>
          <View style={[generalStyles.flexContainer, {marginTop: 30}]}></View>
        </View>
        <View style={[generalStyles.body, {marginTop: 24}]}>
          <PreferecesItem onPress={() => {}}>Medical Condition</PreferecesItem>
          <PreferecesItem onPress={() => {}}>
            Dietary Requirement
          </PreferecesItem>
          <PreferecesItem onPress={() => {}}>Allergies?</PreferecesItem>
          <PreferecesItem onPress={() => {}}>
            Personal Preference
          </PreferecesItem>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Preferences;
