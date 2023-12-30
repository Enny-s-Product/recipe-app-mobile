import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles from '../../../styles';
import Typography, {ErrorText} from '../../../components/atoms/Typography';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';

type IForgotPasswordProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'ForgotPassword'> & {}
>;

const ForgotPassword: IForgotPasswordProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View
          style={[generalStyles.body, {marginTop: 30, paddingHorizontal: 10}]}>
          <Typography size={14} center weight="medium" color="secondary">
            Enter the email address associated with your account and we’ll send
            an email with instruction to reset your password
          </Typography>
        </View>
        <View style={[generalStyles.body, {marginTop: 48}]}>
          <Input
            placeholder="Email"
            mb={20}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <Button
          containerStyle={[generalStyles.body, {marginTop: 60}]}
          disabled={email.trim().length < 4}
          onPress={() => {
            navigation.navigate('ForgotPasswordVerification', {email});
          }}>
          Next
        </Button>
        <View style={[generalStyles.body, {marginTop: 25}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Typography
              color="success"
              size={14}
              center
              weight="bold"
              style={{textDecorationLine: 'underline'}}>
              Back to sign in
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ForgotPassword;
