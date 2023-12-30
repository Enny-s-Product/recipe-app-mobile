import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Screen from '../../../components/template/Screen';
import generalStyles from '../../../styles';
import Typography, {Title} from '../../../components/atoms/Typography';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import StageIndicator from '../../../components/atoms/StagesIndicator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeartIcon from '../../../assets/icons/heart-icon.svg';
import DiabetesIcon from '../../../assets/icons/diabetes-icon.svg';
import KidneyIcon from '../../../assets/icons/kidney-icon.svg';
import LiverIcon from '../../../assets/icons/liver-icon.svg';
import UlcerIcon from '../../../assets/icons/ulcer-icon.svg';
import CholesterolIcon from '../../../assets/icons/cholesterol-icon.svg';
import ObesityIcon from '../../../assets/icons/obesity-icon.svg';
import ImmuneIcon from '../../../assets/icons/immune-icon.svg';
import StrokeIcon from '../../../assets/icons/stroke-icon.svg';
import {SCREEN_HORIZONTAL_SPACING} from '../../../configs/data.config';
import Button from '../../../components/atoms/Button';
import OnboardingIconsCard from '../../../components/molecules/cards/OnboardingIconCard';
import {MedicalConditions} from './medicalConditions.hook';

type IMedicalConditionProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'MedicalCondition'> & {}
>;

const MedicalCondition: IMedicalConditionProps = ({navigation}) => {
  const {themeColors} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const [selectedConditions, setSelectedConditions] = useState<
    MedicalConditions[]
  >([]);

  const handlePressCard = (condition: MedicalConditions) => {
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

  const handleActive = (condition: MedicalConditions): boolean => {
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
            Any Medical Condition?
          </Typography>
          <View style={{marginTop: 22}}>
            <StageIndicator stage={2} />
          </View>
        </View>
        <View
          style={[
            {marginTop: 50, marginHorizontal: SCREEN_HORIZONTAL_SPACING - 5},
          ]}>
          <View style={[generalStyles.flexContainer, {flex: 15}]}>
            <OnboardingIconsCard
              icon={<HeartIcon />}
              onPress={() => handlePressCard('Heart Disease')}
              active={handleActive('Heart Disease')}>
              Heart Disease
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<DiabetesIcon />}
              onPress={() => handlePressCard('Diabetes')}
              active={handleActive('Diabetes')}>
              Diabetes
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<KidneyIcon />}
              onPress={() => handlePressCard('Kidney Disease')}
              active={handleActive('Kidney Disease')}>
              Kidney Disease
            </OnboardingIconsCard>
          </View>
          <View
            style={[generalStyles.flexContainer, {flex: 15, marginTop: 10}]}>
            <OnboardingIconsCard
              icon={<LiverIcon />}
              onPress={() => handlePressCard('Liver Disease')}
              active={handleActive('Liver Disease')}>
              Liver Disease
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<UlcerIcon />}
              onPress={() => handlePressCard('Ulcer')}
              active={handleActive('Ulcer')}>
              Ulcer
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<CholesterolIcon />}
              onPress={() => handlePressCard('High Colesterol')}
              active={handleActive('High Colesterol')}>
              High Cholesterol
            </OnboardingIconsCard>
          </View>
          <View
            style={[generalStyles.flexContainer, {flex: 15, marginTop: 10}]}>
            <OnboardingIconsCard
              icon={<ObesityIcon />}
              onPress={() => handlePressCard('Obesity')}
              active={handleActive('Obesity')}>
              Obesity
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<ImmuneIcon />}
              onPress={() => handlePressCard('Immune Disorder')}
              active={handleActive('Immune Disorder')}>
              Immune Disorder
            </OnboardingIconsCard>
            <OnboardingIconsCard
              icon={<StrokeIcon />}
              onPress={() => handlePressCard('Stroke')}
              active={handleActive('Stroke')}>
              Stroke
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
        onPress={() => navigation.navigate('DietaryRequirement')}>
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

export default MedicalCondition;
