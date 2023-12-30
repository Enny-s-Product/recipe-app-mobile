import {View, Text, ScrollView, Switch} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Typography, {Label} from '../../../components/atoms/Typography';
import generalStyles from '../../../styles';

type IManageNotificationProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'ManageNotifications'> & {}
>;

const ManageNotifications: IManageNotificationProps = () => {
  const {bottom} = useSafeAreaInsets();
  const {themeColors} = useTheme();
  const [pushNotifications, setPushNotifications] = useState(false);
  const [appUpdates, setAppUpdates] = useState(false);

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={24}>Notification</Label>
          <View style={[generalStyles.flexContainer, {marginTop: 30}]}></View>
        </View>
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {marginTop: 24, justifyContent: 'space-between', flex: 10},
          ]}>
          <View style={{flex: 6}}>
            <Typography size={14} weight="semi-bold">
              Push Notifications
            </Typography>
            <Typography
              size={12}
              weight="medium"
              color="secondary"
              style={{marginTop: 4}}>
              Receive push notifications regarding new and tending meals
            </Typography>
          </View>
          <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Switch
              trackColor={{
                false: themeColors.switchInactiveBg,
                true: themeColors.switchActiveBg,
              }}
              thumbColor={
                pushNotifications
                  ? themeColors.activeThumbColor
                  : themeColors.thumbColor
              }
              ios_backgroundColor={
                pushNotifications
                  ? themeColors.switchActiveBg
                  : themeColors.switchInactiveBg
              }
              onValueChange={() => setPushNotifications(!pushNotifications)}
              value={pushNotifications}
            />
          </View>
        </View>

        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {marginTop: 24, justifyContent: 'space-between', flex: 10},
          ]}>
          <View style={{flex: 6}}>
            <Typography size={14} weight="semi-bold">
              App Updates
            </Typography>
            <Typography
              size={12}
              weight="medium"
              color="secondary"
              style={{marginTop: 4}}>
              Receive notifications about app updates, new features, and
              improvements
            </Typography>
          </View>
          <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Switch
              trackColor={{
                false: themeColors.switchInactiveBg,
                true: themeColors.switchActiveBg,
              }}
              thumbColor={
                appUpdates
                  ? themeColors.activeThumbColor
                  : themeColors.thumbColor
              }
              ios_backgroundColor={
                appUpdates
                  ? themeColors.switchActiveBg
                  : themeColors.switchInactiveBg
              }
              onValueChange={() => setAppUpdates(!appUpdates)}
              value={appUpdates}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ManageNotifications;
