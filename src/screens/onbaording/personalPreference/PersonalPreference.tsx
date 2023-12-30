import {
  View,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Screen from '../../../components/template/Screen';
import generalStyles from '../../../styles';
import Typography from '../../../components/atoms/Typography';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import StageIndicator from '../../../components/atoms/StagesIndicator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NewRecipeIcon from '../../../assets/icons/new-recipe-icon.svg';
import DietInstructionsIcon from '../../../assets/icons/diet-restrictions-icon.svg';
import BeginnerIcon from '../../../assets/icons/beginner-icon.svg';
import ManageWeightIcon from '../../../assets/icons/manage-weight-icon.svg';
import IntermediateIcon from '../../../assets/icons/intermediate-icon.svg';
import ExpertIcon from '../../../assets/icons/expert-icon.svg';

import {SCREEN_HORIZONTAL_SPACING} from '../../../configs/data.config';
import Button from '../../../components/atoms/Button';
import {CookingSkills, Goals} from './personalPreference.hook';
import OnboardingIconsCard from '../../../components/molecules/cards/OnboardingIconCard';

type IPersonalPreferenceProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'PersonalPreference'> & {}
>;

const PersonalPreference: IPersonalPreferenceProps = ({navigation}) => {
  const {themeColors} = useTheme();
  const {bottom} = useSafeAreaInsets();

  const [selectedCookingSkills, setSelectedCookingSkills] = useState<
    CookingSkills[]
  >([]);
  const [selectedGoals, setSelectedGoals] = useState<Goals[]>([]);

  const handlePressGoal = (goal: Goals) => {
    // check if item is in array
    if (selectedGoals.includes(goal)) {
      const filterdGoals = selectedGoals.filter(item => item !== goal);
      setSelectedGoals(filterdGoals);
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handlePressCookingsSkills = (skill: CookingSkills) => {
    // check if item is in array
    if (selectedCookingSkills.includes(skill)) {
      const filterdSkills = selectedCookingSkills.filter(
        item => item !== skill,
      );
      setSelectedCookingSkills(filterdSkills);
    } else {
      setSelectedCookingSkills([...selectedCookingSkills, skill]);
    }
  };

  const handleActiveGoal = (goal: Goals): boolean => {
    return selectedGoals.includes(goal);
  };

  const handleActiveSkills = (skill: CookingSkills): boolean => {
    return selectedCookingSkills.includes(skill);
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
            Personal Preference
          </Typography>
          <View style={{marginTop: 22}}>
            <StageIndicator stage={5} />
          </View>
        </View>
        <Typography
          center
          size={14}
          color="secondary"
          style={{marginTop: 30}}
          weight="medium">
          What’s your goal
        </Typography>
        <View
          style={[
            {marginTop: 20, marginHorizontal: SCREEN_HORIZONTAL_SPACING - 5},
          ]}>
          <View style={[generalStyles.flexContainer, {flex: 15}]}>
            <OnboardingIconsCard
              icon={<ManageWeightIcon />}
              onPress={() => handlePressGoal('Manage Weight')}
              active={handleActiveGoal('Manage Weight')}>
              Manage Weight
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<NewRecipeIcon />}
              onPress={() => handlePressGoal('New Recipes')}
              active={handleActiveGoal('New Recipes')}>
              New Recipes
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<DietInstructionsIcon />}
              onPress={() => handlePressGoal('Diet Restrictions')}
              active={handleActiveGoal('Diet Restrictions')}>
              Diet Restrictions
            </OnboardingIconsCard>
          </View>
        </View>
        <Typography
          center
          size={14}
          color="secondary"
          style={{marginTop: 50}}
          weight="medium">
          Describe your cooking skills
        </Typography>
        <View
          style={[
            {marginTop: 20, marginHorizontal: SCREEN_HORIZONTAL_SPACING - 5},
          ]}>
          <View style={[generalStyles.flexContainer, {flex: 15}]}>
            <OnboardingIconsCard
              icon={<BeginnerIcon />}
              onPress={() => handlePressCookingsSkills('Beginner')}
              active={handleActiveSkills('Beginner')}>
              Beginner
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<IntermediateIcon />}
              onPress={() => handlePressCookingsSkills('Intermediate')}
              active={handleActiveSkills('Intermediate')}>
              Intermediate
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<ExpertIcon />}
              onPress={() => handlePressCookingsSkills('Expert')}
              active={handleActiveSkills('Expert')}>
              Expert
            </OnboardingIconsCard>
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
        onPress={() => navigation.navigate('Loading')}>
        Next
      </Button>
    </Screen>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingBottom: 27,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingTop: 10,
  },
});

export default PersonalPreference;
