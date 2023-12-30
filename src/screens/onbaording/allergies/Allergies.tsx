import {View, ScrollView, StyleSheet, Pressable} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Screen from '../../../components/template/Screen';
import generalStyles from '../../../styles';
import Typography from '../../../components/atoms/Typography';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import StageIndicator from '../../../components/atoms/StagesIndicator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  HIT_SLOP,
  SCREEN_HORIZONTAL_SPACING,
} from '../../../configs/data.config';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import AutoCompleteModal from '../../../components/molecules/AutoCompleteModal';
import {allAllergies} from '../../../data/onboarding';
import {BlackCancelIcon} from '../../../components/atoms/Icons';
import {ISelect} from '../../../types';

type IAllergiesProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'Allergies'> & {}
>;

const Allergies: IAllergiesProps = ({navigation}) => {
  const {themeColors} = useTheme();
  const {bottom} = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAllergies, setSelectedAllergies] = useState<ISelect[]>([]);

  const handleAllergySelect = (selected: ISelect) => {
    if (
      selectedAllergies.filter(item => item?.value === selected?.value).length >
      0
    )
      return;
    setSelectedAllergies([...selectedAllergies, selected]);
  };

  const handleUnSelectAllergy = (selected: ISelect) => {
    const filteredAllergy = selectedAllergies?.filter(
      item => item?.value !== selected?.value,
    );
    setSelectedAllergies(filteredAllergy);
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
            Any Allergies?
          </Typography>
          <View style={{marginTop: 22}}>
            <StageIndicator stage={4} />
          </View>
        </View>
        <View
          style={[
            generalStyles.body,
            {marginTop: 41, marginHorizontal: SCREEN_HORIZONTAL_SPACING - 5},
          ]}>
          <Typography center size={14} weight="medium">
            Enter any allergies below
          </Typography>
          <Input
            containerStyle={{marginTop: 20}}
            whiteBg
            radius={4}
            value={searchTerm}
            onChangeText={value => setSearchTerm(value)}
          />
          <AutoCompleteModal
            options={allAllergies}
            searchTerm={searchTerm}
            onPress={params => handleAllergySelect(params)}
          />
        </View>
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {flexWrap: 'wrap', marginTop: 22},
          ]}>
          {selectedAllergies.map((item, index) => {
            return (
              <SelectedContainer
                key={index}
                onPressCancel={() => handleUnSelectAllergy(item)}>
                {item?.value}
              </SelectedContainer>
            );
          })}
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
        onPress={() => navigation.navigate('PersonalPreference')}>
        Next
      </Button>
    </Screen>
  );
};

interface ISelectedContainerProps {
  children: ReactNode;
  onPressCancel: () => void;
}

const SelectedContainer: React.FC<ISelectedContainerProps> = ({
  children,
  onPressCancel,
}) => {
  const {themeColors} = useTheme();
  return (
    <View
      style={[
        styles.selecetedContainer,
        {
          backgroundColor: themeColors.background,
          borderColor: themeColors.successText,
        },
      ]}>
      <Typography size={16} weight="medium">
        {children}
      </Typography>
      <Pressable
        style={[styles.iconContainer]}
        hitSlop={HIT_SLOP(5)}
        onPress={onPressCancel}>
        <BlackCancelIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingBottom: 27,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingTop: 10,
  },
  selecetedContainer: {
    paddingVertical: 7,
    paddingHorizontal: 21,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 10,
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: -7,
    right: -5,
  },
});

export default Allergies;
