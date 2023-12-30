import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IMealPlansStackParamsList} from '../../../navigators/MealPlansNavigator';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles from '../../../styles';
import Typography, {Label} from '../../../components/atoms/Typography';
import {
  CreateButton,
  MealPlanCard,
  ModalContentMealPlan,
} from './MealPlanComponents';
import {HeaderAndSeeAllButton} from '../../homeTab/home/HomeComponents';
import {NoMealPlan} from '../../../components/atoms/Icons';
import Popup from '../../../components/organisms/modals/Popup';

type IMealPlansProps = React.FC<
  StackScreenProps<IMealPlansStackParamsList, 'MealPlans'> & {}
>;

const MealPlans: IMealPlansProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const [open, setOpen] = useState(false);

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 50}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={24}>My meal plans</Label>
        </View>

        <View
          style={[
            generalStyles.body,
            {marginVertical: 100, alignItems: 'center'},
          ]}>
          <NoMealPlan />
          <Typography
            size={14}
            weight="medium"
            style={{marginTop: 30}}
            color="gray"
            center>
            It looks like you haven't set up a meal plan yet. Let's get started
            on your personalized journey!
          </Typography>
        </View>

        <View style={[generalStyles.body, {marginTop: 19}]}>
          <CreateButton onPress={() => setOpen(true)}>
            Create new meal plan +
          </CreateButton>
        </View>

        <View style={[generalStyles.body, {marginTop: 50}]}>
          <MealPlanCard
            onPressContainer={() => navigation.navigate('MealPlanDetails')}
          />
          <MealPlanCard
            onPressContainer={() => navigation.navigate('MealPlanDetails')}
          />
        </View>

        <View style={[generalStyles.body, {marginTop: 30}]}>
          <HeaderAndSeeAllButton
            text="Recommended meal plan"
            successBtn
            onPress={() => navigation.navigate('RecommendedMealPlans')}
          />
          <View style={{marginTop: 30}}>
            <MealPlanCard recommendedPlans />
            <MealPlanCard recommendedPlans />
          </View>
        </View>
      </ScrollView>

      <Popup open={open} closeModal={() => setOpen(false)}>
        <ModalContentMealPlan
          onSubmit={() => {}}
          closeModal={() => setOpen(false)}
        />
      </Popup>
    </Screen>
  );
};

export default MealPlans;
