import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles from '../../../styles';
import Typography, {ErrorText} from '../../../components/atoms/Typography';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {useToggleShow} from '../../../hooks/utils.hook';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EyeIcon, EyeSlashIcon} from '../../../components/atoms/Icons';

type IResetPasswordProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'ResetPassword'> & {}
>;

const ResetPassword: IResetPasswordProps = ({
  navigation,
  route: {
    params: {email},
  },
}) => {
  const {bottom} = useSafeAreaInsets();
  const {show, toggleShow} = useToggleShow();
  const {themeColors} = useTheme();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 38}]}>
          <Input
            placeholder="Password"
            mb={20}
            secureTextEntry={!show}
            rightIcon={
              <TouchableOpacity onPress={toggleShow}>
                {show ? <EyeSlashIcon /> : <EyeIcon />}
              </TouchableOpacity>
            }
          />
          <Input
            placeholder="Confirm Password"
            mb={20}
            secureTextEntry={!show}
          />
        </View>
        <View style={[generalStyles.body, {}]}>
          <ErrorText weight="semi-bold" icon size={14} center>
            Passwords do not match
          </ErrorText>
        </View>

        <Button containerStyle={[generalStyles.body, {marginTop: 25}]}>
          Submit
        </Button>
        <View style={[generalStyles.body, {marginTop: 43}]}>
          <Typography size={14} color="ash" weight="medium" center>
            Didn’t get a code?
            <Typography
              size={14}
              color="success"
              weight="bold"
              style={{textDecorationLine: 'underline'}}>
              Resend Code in 1:59
            </Typography>
          </Typography>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 50,
    height: 60,
    borderRadius: 10,
    borderWidth: 0,
  },
  underlineStyleHighLighted: {
    borderBottomColor: '#03DAC6',
  },
});

export default ResetPassword;
