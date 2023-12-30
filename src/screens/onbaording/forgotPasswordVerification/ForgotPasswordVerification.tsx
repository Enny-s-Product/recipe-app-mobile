import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles from '../../../styles';
import Typography from '../../../components/atoms/Typography';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';

type IForgotPasswordVerificationProps = React.FC<
  StackScreenProps<
    IOnboardingStackParamsList,
    'ForgotPasswordVerification'
  > & {}
>;

const ForgotPasswordVerification: IForgotPasswordVerificationProps = ({
  navigation,
  route: {
    params: {email},
  },
}) => {
  const {bottom} = useSafeAreaInsets();
  const [otp, setOtp] = useState('');
  const {themeColors} = useTheme();
  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View
          style={[generalStyles.body, {marginTop: 30, paddingHorizontal: 10}]}>
          <Typography
            size={14}
            center
            weight="medium"
            color="secondary"
            style={{lineHeight: 20}}>
            A confirmation email has been sent to{' '}
            <Typography weight="bold">{email}</Typography>, enter the 6 digits
            code sent to verify your account
          </Typography>
        </View>
        <View style={[generalStyles.body, {marginTop: 48}]}>
          <OTPInputView
            style={{width: '100%', height: 100}}
            pinCount={4}
            code={otp}
            onCodeChanged={code => setOtp(code)}
            autoFocusOnLoad
            placeholderTextColor={themeColors.blackWhite}
            codeInputFieldStyle={{
              ...styles.underlineStyleBase,
              borderBottomColor: themeColors.otpBorderColor,
              color: themeColors.dark,
              borderBottomWidth: 1,
            }}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {}}
          />
        </View>
        <Button
          containerStyle={[generalStyles.body, {marginTop: 60}]}
          onPress={() => navigation.navigate('ResetPassword', {email})}>
          Verify
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

export default ForgotPasswordVerification;
