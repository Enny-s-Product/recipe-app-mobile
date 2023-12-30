import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles from '../../../styles';
import Typography, {Title} from '../../../components/atoms/Typography';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Button from '../../../components/atoms/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {useAccountVerification} from './accountVerification.hook';
import Countdown from '../../../components/atoms/Countdown';

type IAccountVerificationProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'AccountVerification'> & {}
>;

const AccountVerification: IAccountVerificationProps = ({
  navigation,
  route: {
    params: {email, firstName, password},
  },
}) => {
  const {bottom} = useSafeAreaInsets();
  const [otp, setOtp] = useState('');
  const {themeColors} = useTheme();
  const {
    countdown,
    setCountdown,
    expireCountdown,
    setExpireCountdown,
    onSubmit,
  } = useAccountVerification();

  const handleNavigate = () => navigation.navigate('PersonalizeTasteAdventure');

  return (
    <Screen fadeBg>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 5}]}>
          <Title size={24} center>
            Account Verification
          </Title>
        </View>
        <View
          style={[generalStyles.body, {marginTop: 30, paddingHorizontal: 10}]}>
          <Typography
            size={14}
            center
            weight="medium"
            color="secondary"
            style={{lineHeight: 20}}>
            We’ve sent a 4 digit code to
            <Typography weight="bold">{email}</Typography>, This code will
            expire in{' '}
            <Countdown
              countdown={expireCountdown}
              setCountdown={setExpireCountdown}
              weight="bold"
              color="secondary"
              children=""
            />
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
          disabled={otp.trim().length < 4}
          onPress={() =>
            onSubmit({email, firstName, password, otp}, handleNavigate)
          }>
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
              Resend Code in{' '}
              <Countdown
                countdown={countdown}
                setCountdown={setCountdown}
                color="success"
                weight="bold"
                children=""
              />
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

export default AccountVerification;
