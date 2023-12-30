import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/template/Screen';
import Typography, {Label} from '../../../components/atoms/Typography';
import {StackScreenProps} from '@react-navigation/stack';
import generalStyles from '../../../styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ExploreCard} from '../../homeTab/explore/ExploreComponents';
import {IRecipesStackParamsList} from '../../../navigators/RecipesNavigator';
import {AddItemButton} from './SavedRecipesComponents';
import Button from '../../../components/atoms/Button';

type ISavedRecipesProps = React.FC<
  StackScreenProps<IRecipesStackParamsList, 'SavedRecipes'> & {}
>;

const SavedRecipes: ISavedRecipesProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={30}>Saved Recipes</Label>
          <Typography
            size={14}
            weight="medium"
            color="gray"
            style={{marginTop: 13}}>
            Select saved recipes you would like to add to your collection
          </Typography>
        </View>

        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {marginTop: 36, flex: 10, flexWrap: 'wrap'},
          ]}>
          <View style={{flex: 5, paddingHorizontal: 5}}>
            <ExploreCard onPress={() => navigation.navigate('RecipeDetails')} />
          </View>
          <View style={{flex: 5, paddingHorizontal: 5}}>
            <ExploreCard />
          </View>
        </View>
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {flex: 10, flexWrap: 'wrap'},
          ]}>
          <View style={{flex: 5, paddingHorizontal: 5}}>
            <ExploreCard />
          </View>
          <View style={{flex: 5, paddingHorizontal: 5}}>
            <ExploreCard />
          </View>
        </View>

        <View
          style={[
            generalStyles.body,
            generalStyles.centralizeItem,
            {marginTop: 40},
          ]}>
          <AddItemButton>Add Recipe</AddItemButton>
        </View>
        <Button containerStyle={[generalStyles.body, {marginTop: 20}]}>
          Create meal plan
        </Button>
      </ScrollView>
    </Screen>
  );
};

export default SavedRecipes;
