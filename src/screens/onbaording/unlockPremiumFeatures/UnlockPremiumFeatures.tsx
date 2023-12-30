import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {ReactNode} from 'react';
import Screen from '../../../components/template/Screen';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import generalStyles from '../../../styles';
import {
  ChevronRightIcon,
  GreenTickIcon,
  WhiteArrowLeftIcon,
} from '../../../components/atoms/Icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography from '../../../components/atoms/Typography';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Badge from '../../../components/atoms/Badge';
import Button from '../../../components/atoms/Button';

type IUnlockPremiumFeaturesProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'UnlockPremiumFeatures'> & {}
>;

const {width, height} = Dimensions.get('screen');

const IMAGE = require('../../../assets/images/premium-features.png');

const UnlockPremiumFeatures: IUnlockPremiumFeaturesProps = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const {themeColors} = useTheme();
  return (
    <Screen>
      <StatusBar barStyle={top > 0 ? 'light-content' : 'dark-content'} />
      <ImageBackground style={styles.imageBackground} source={IMAGE}>
        <View style={[generalStyles.body, {marginTop: top + 10}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteArrowLeftIcon />
          </TouchableOpacity>
          <View
            style={[generalStyles.flexContainer, {justifyContent: 'flex-end'}]}>
            <TouchableOpacity>
              <Typography color="lightSuccess" size={16} weight="semi-bold">
                Skip
              </Typography>
            </TouchableOpacity>
          </View>
          <Typography
            size={26}
            weight="bold"
            color="inverse"
            center
            style={{marginTop: 20}}>
            Unlock Premium Features!{' '}
          </Typography>
          <Typography
            size={16}
            weight="medium"
            color="inverse"
            center
            style={{marginTop: 12, lineHeight: 18}}>
            Unlock Premium for a World of Exclusive Recipes, Customized Meal
            Plans, Expert Insights, and More!
          </Typography>
        </View>
        <View
          style={[
            generalStyles.body,
            styles.premiumContainer,
            {backgroundColor: themeColors.background},
          ]}>
          <View style={{alignItems: 'center'}}>
            <Badge backgroundColor="#96EDD280" textColor="black" radius={36}>
              PREMIUM
            </Badge>
          </View>
          <Typography
            center
            style={{marginTop: 17, marginBottom: 15}}
            size={48}
            weight="bold">
            4.25
            <Typography center size={32} weight="medium">
              /month
            </Typography>
          </Typography>
          <ListItem>Early Access</ListItem>
          <ListItem>Exclusive recipes</ListItem>
          <ListItem>Customized Meal Plans</ListItem>
          <ListItem>Health Tips & Insights</ListItem>
          <ListItem>Ad-Free Experience</ListItem>
          <ListItem>Early Access</ListItem>
          <Button
            radius={8}
            containerStyle={{marginTop: 16}}
            rightIcon={<ChevronRightIcon />}>
            Subscribe
          </Button>
        </View>
      </ImageBackground>
    </Screen>
  );
};

const ListItem = ({children}: {children: ReactNode}) => {
  return (
    <View
      style={[
        generalStyles.flexContainer,
        {justifyContent: 'center', marginBottom: 20},
      ]}>
      <GreenTickIcon />
      <Typography
        size={14}
        weight="medium"
        color="secondary"
        style={{marginLeft: 10}}>
        {children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width,
    height: (height * 2) / 5,
    resizeMode: 'contain',
  },
  premiumContainer: {
    borderRadius: 16,
    marginTop: 22,
    padding: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default UnlockPremiumFeatures;
