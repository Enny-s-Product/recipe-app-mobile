import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import Screen from '../../../components/template/Screen';
import generalStyles from '../../../styles';
import Typography, {Title} from '../../../components/atoms/Typography';
import Input from '../../../components/atoms/Input';
import {
  AppleIcon,
  EyeIcon,
  EyeSlashIcon,
  FacebookIcon,
  GoogleIcon,
} from '../../../components/atoms/Icons';
import {useToggleShow} from '../../../hooks/utils.hook';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/atoms/Button';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import SocialMediaButton from '../../../components/atoms/SocialMediaButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import {LoginFormValues, useLogin} from './login.hook';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

const {height} = Dimensions.get('screen');
const IMAGE = require('../../../assets/images/login-bottom-pattern.png');

type ILoginProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'Login'> & {}
>;

const Login: ILoginProps = ({navigation}) => {
  const {show, toggleShow} = useToggleShow();
  const {themeColors} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const {LoginSchema, onSubmit} = useLogin();

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
  });

  const email = watch('email');
  const password = watch('password');

  return (
    <Screen style={{position: 'relative'}}>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 5}]}>
          <Title size={24} center>
            Welcome
          </Title>
        </View>
        <View style={[generalStyles.body]}>
          <Typography
            size={14}
            center
            style={{marginTop: 9}}
            weight="medium"
            color="secondary">
            Log in to continue
          </Typography>
        </View>

        <View style={[generalStyles.body, {marginTop: 38}]}>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value, onBlur}}) => (
              <Input
                placeholder="Email"
                mb={20}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                errorText={errors?.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value, onBlur}}) => (
              <Input
                placeholder="Password"
                mb={20}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!show}
                rightIcon={
                  <TouchableOpacity onPress={toggleShow}>
                    {show ? <EyeSlashIcon /> : <EyeIcon />}
                  </TouchableOpacity>
                }
                errorText={errors?.password?.message}
              />
            )}
          />

          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Typography
              color="success"
              size={14}
              weight="semi-bold"
              style={{textDecorationLine: 'underline'}}>
              Forgot Password?
            </Typography>
          </Pressable>
        </View>

        <Button
          containerStyle={[generalStyles.body, {marginTop: 25}]}
          onPress={handleSubmit(data => onSubmit(data, () => {}))}>
          Log In
        </Button>

        <View style={[generalStyles.body, {marginTop: 27}]}>
          <Typography size={14} color="ash" weight="medium" center>
            Don’t have an account?{' '}
            <Typography
              size={14}
              color="success"
              weight="bold"
              style={{textDecorationLine: 'underline'}}
              onPress={() => navigation.navigate('GetStarted')}>
              Sign Up now
            </Typography>
          </Typography>
        </View>
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {marginTop: 30, justifyContent: 'center', paddingHorizontal: 30},
          ]}>
          <View
            style={[styles.line, {borderTopColor: themeColors.lineColor}]}
          />
          <Typography
            color="gray"
            size={14}
            weight="medium"
            style={{marginHorizontal: 10}}>
            or use social sign up
          </Typography>
          <View
            style={[styles.line, {borderTopColor: themeColors.lineColor}]}
          />
        </View>
        <View style={[generalStyles.body, {marginTop: 30}]}>
          <SocialMediaButton icon={<GoogleIcon />}>
            Continue with Google
          </SocialMediaButton>
          <SocialMediaButton
            icon={<FacebookIcon />}
            containerStyle={{marginTop: 17}}>
            Continue with Facebook
          </SocialMediaButton>
          <SocialMediaButton
            icon={<AppleIcon />}
            containerStyle={{marginTop: 17}}>
            Continue with Apple
          </SocialMediaButton>
        </View>
      </ScrollView>
      <Image source={IMAGE} style={[styles.image]} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: height / 7,
  },
});

export default Login;
