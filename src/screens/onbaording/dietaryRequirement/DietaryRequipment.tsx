import {View, ScrollView, StyleSheet} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Screen from '../../../components/template/Screen';
import generalStyles from '../../../styles';
import Typography from '../../../components/atoms/Typography';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import StageIndicator from '../../../components/atoms/StagesIndicator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PregnancyIcon from '../../../assets/icons/pregnancy-icon.svg';
import VeganIcon from '../../../assets/icons/vegan-icon.svg';
import GlutenIcon from '../../../assets/icons/gluten-icon.svg';
import VegetarianIcon from '../../../assets/icons/vegeterian-icon.svg';
import KetoIcon from '../../../assets/icons/keto-icon.svg';
import {SCREEN_HORIZONTAL_SPACING} from '../../../configs/data.config';
import Button from '../../../components/atoms/Button';
import {DietaryRequirements} from './dietaryRequirement.hook';
import OnboardingIconsCard from '../../../components/molecules/cards/OnboardingIconCard';

type IDietaryRequirementProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'DietaryRequirement'> & {}
>;

const DietaryRequirement: IDietaryRequirementProps = ({navigation}) => {
  const {themeColors} = useTheme();
  const {bottom} = useSafeAreaInsets();

  const [selectedConditions, setSelectedConditions] = useState<
    DietaryRequirements[]
  >([]);

  const handlePressCard = (condition: DietaryRequirements) => {
    // check if item is in array
    if (selectedConditions.includes(condition)) {
      const filterdConditions = selectedConditions.filter(
        item => item !== condition,
      );
      setSelectedConditions(filterdConditions);
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  const handleActive = (condition: DietaryRequirements): boolean => {
    return selectedConditions.includes(condition);
  };

  return (
    <Screen fadeBg>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 200}}>
        <View
          style={[
            generalStyles.paddingBody,
            styles.topContainer,
            {backgroundColor: themeColors.background},
          ]}>
          <Typography size={18} color="secondary" center weight="bold">
            Any Dietary Requirement?
          </Typography>
          <View style={{marginTop: 22}}>
            <StageIndicator stage={3} />
          </View>
        </View>
        <View
          style={[
            {marginTop: 50, marginHorizontal: SCREEN_HORIZONTAL_SPACING - 5},
          ]}>
          <View style={[generalStyles.flexContainer, {flex: 15}]}>
            <OnboardingIconsCard
              icon={<PregnancyIcon />}
              onPress={() => handlePressCard('Pregnancy')}
              active={handleActive('Pregnancy')}>
              Pregnancy
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<VeganIcon />}
              onPress={() => handlePressCard('Vegan')}
              active={handleActive('Vegan')}>
              Vegan
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<GlutenIcon />}
              onPress={() => handlePressCard('Gluten-free')}
              active={handleActive('Gluten-free')}>
              Gluten-free
            </OnboardingIconsCard>
          </View>
          <View
            style={[generalStyles.flexContainer, {flex: 15, marginTop: 10}]}>
            <OnboardingIconsCard
              icon={<VegetarianIcon />}
              onPress={() => handlePressCard('Vegetarian')}
              active={handleActive('Vegetarian')}>
              Vegetarian
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<KetoIcon />}
              onPress={() => handlePressCard('Keto')}
              active={handleActive('Keto')}>
              Keto
            </OnboardingIconsCard>
            <OnboardingIconsCard empty></OnboardingIconsCard>
          </View>
        </View>
      </ScrollView>

      <Button
        containerStyle={[generalStyles.buttonContainer, {bottom: bottom + 100}]}
        mode="successInverse"
        fadeBg>
        Skip
      </Button>

      <Button
        containerStyle={[generalStyles.buttonContainer, {bottom: bottom + 20}]}
        onPress={() => navigation.navigate('Allergies')}>
        Next
      </Button>
    </Screen>
  );
};

interface ICardContainerProps {
  icon?: ReactNode;
  children?: ReactNode;
  empty?: boolean;
}

const styles = StyleSheet.create({
  topContainer: {
    paddingBottom: 27,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingTop: 10,
  },
});

export default DietaryRequirement;
