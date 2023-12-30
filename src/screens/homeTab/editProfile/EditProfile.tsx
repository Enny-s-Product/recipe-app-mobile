import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import generalStyles from '../../../styles';
import {Label} from '../../../components/atoms/Typography';
import {
  GreenCheckIcon,
  GreenTickIcon,
  ProfileImageIcon,
} from '../../../components/atoms/Icons';
import Input from '../../../components/atoms/Input';
import PressableInput from '../../../components/atoms/PressableInput';

type IEditProfileProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'EditProfile'> & {}
>;

const EditProfile: IEditProfileProps = () => {
  const {bottom} = useSafeAreaInsets();
  const {themeColors} = useTheme();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {marginTop: 19, justifyContent: 'space-between'},
          ]}>
          <Label size={24}>Edit Profile</Label>
          <TouchableOpacity>
            <GreenCheckIcon />
          </TouchableOpacity>
        </View>
        <View
          style={[
            generalStyles.flexContainer,
            {marginTop: 30, justifyContent: 'center'},
          ]}>
          <View>
            <ProfileImageIcon size={95} />
          </View>
        </View>
        <View
          style={[
            generalStyles.body,
            {marginTop: 24, justifyContent: 'center'},
          ]}>
          <Label size={18} weight="semi-bold">
            Your information
          </Label>

          <Input
            mb={16}
            containerStyle={{marginTop: 16}}
            placeholder="First Name"
            placeholderTextColor={themeColors.secondary}
          />

          <Input
            mb={16}
            placeholder="Last Name"
            placeholderTextColor={themeColors.secondary}
          />

          <Input
            mb={16}
            placeholder="Email"
            placeholderTextColor={themeColors.secondary}
          />

          <PressableInput mb={16} placeholder="Gender" />

          <Input
            mb={16}
            placeholder="Password"
            placeholderTextColor={themeColors.secondary}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default EditProfile;
