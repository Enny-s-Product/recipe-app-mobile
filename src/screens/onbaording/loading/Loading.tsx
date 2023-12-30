import {View, Text, Image} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Screen from '../../../components/template/Screen';
import Typography from '../../../components/atoms/Typography';
import generalStyles from '../../../styles';

type ILoadingProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'Loading'> & {}
>;

const GIF = require('../../../assets/gif/cooking.gif');

const Loading: ILoadingProps = () => {
  return (
    <Screen>
      <View
        style={[
          generalStyles.body,
          {justifyContent: 'center', alignItems: 'center', flex: 1},
        ]}>
        <Image style={{width: 277, height: 277}} source={GIF} />
        <Typography size={16} weight="bold" color="secondary" center>
          We're cooking up a tailored experience just for you. Sit tight while
          we prepare your personalized culinary journey.
        </Typography>
      </View>
    </Screen>
  );
};

export default Loading;
