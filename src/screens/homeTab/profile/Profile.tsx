import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles from '../../../styles';
import Typography, {Label} from '../../../components/atoms/Typography';
import {
  ContactUsIcon,
  InviteFriendsIcon,
  LogoutIcon,
  ManageSubscriptionIcon,
  NotificationWhiteIcon,
  PreferencesIcon,
  ProfileImageIcon,
  SettingsWhiteIcon,
} from '../../../components/atoms/Icons';
import {EditButton, ItemWrapper} from './ProfileComponents';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';

type IProfileProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'Profile'> & {}
>;

const Profile: IProfileProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const {themeColors} = useTheme();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={30}>Profile</Label>
          <View style={[generalStyles.flexContainer, {marginTop: 30}]}>
            <ProfileImageIcon size={95} />
            <View style={{marginLeft: 20}}>
              <Typography size={24} weight="semi-bold">
                Jane Mane
              </Typography>
              <Typography size={16} color="gray">
                janedoe123@gmail.com
              </Typography>
              <View style={{marginTop: 10}}>
                <EditButton onPress={() => navigation.navigate('EditProfile')}>
                  Edit profile
                </EditButton>
              </View>
            </View>
          </View>
        </View>
        <View style={[{marginTop: 40}]}>
          <ItemWrapper
            icon={<NotificationWhiteIcon />}
            onPress={() => navigation.navigate('ManageNotifications')}>
            Notifications
          </ItemWrapper>
          <ItemWrapper
            icon={<ManageSubscriptionIcon />}
            onPress={() => navigation.navigate('ManageSubscriptions')}>
            Manage Subscription
          </ItemWrapper>
          <ItemWrapper
            icon={<PreferencesIcon />}
            onPress={() => navigation.navigate('Preferences')}>
            Preferences
          </ItemWrapper>
        </View>

        <View
          style={[
            generalStyles.body,
            {
              borderTopWidth: 1,
              borderTopColor: themeColors.secondaryBorderColor,
              marginTop: 40,
            },
          ]}></View>

        <View style={[{marginTop: 40}]}>
          <ItemWrapper icon={<SettingsWhiteIcon />}>Settings</ItemWrapper>
          <ItemWrapper icon={<InviteFriendsIcon />}>Invite friends</ItemWrapper>
          <ItemWrapper icon={<ContactUsIcon />}>Contact us</ItemWrapper>
        </View>
        <View style={[{marginTop: 40, alignItems: 'center'}]}>
          <TouchableOpacity>
            <View style={[generalStyles.flexContainer]}>
              <LogoutIcon />
              <Typography
                color="error"
                size={16}
                weight="semi-bold"
                style={{marginLeft: 8}}>
                Logout
              </Typography>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Profile;
