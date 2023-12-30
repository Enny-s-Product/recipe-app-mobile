import {View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import generalStyles from '../../../styles';
import {Label} from '../../../components/atoms/Typography';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import Button from '../../../components/atoms/Button';
import {ItemTag, TitleAndIcon} from './FilterComponents';
import {useFilter} from './filter.hook';
import Input from '../../../components/atoms/Input';
import {SCREEN_HORIZONTAL_SPACING} from '../../../configs/data.config';
import AutoCompleteModal from '../../../components/molecules/AutoCompleteModal';
import {allDietTypes} from '../../../data/home';

type IFilterProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'Filter'> & {}
>;

const {width} = Dimensions.get('screen');

const Filter: IFilterProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const {
    display,
    toggleDisplay,
    hideButtons,
    handleScroll,
    dietType,
    setDietType,
  } = useFilter();

  return (
    <Screen style={{position: 'relative'}}>
      <ScrollView
        contentContainerStyle={[
          {paddingBottom: bottom + 200, position: 'relative'},
        ]}
        onScroll={handleScroll}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={30}>Filter</Label>
        </View>

        <View style={[generalStyles.body, {marginTop: 30}]}>
          <TitleAndIcon
            contentsDisplayed={display?.nationality}
            toggleDisplay={() => toggleDisplay('nationality')}>
            Nationality
          </TitleAndIcon>

          {display?.nationality && (
            <View style={{marginTop: 20}}>
              <Input placeholder="Filter by dish type" />
            </View>
          )}
        </View>

        <View style={[generalStyles.body, {marginTop: 30}]}>
          <TitleAndIcon
            contentsDisplayed={display?.dishType}
            toggleDisplay={() => toggleDisplay('dishType')}>
            Dish Type
          </TitleAndIcon>

          {display?.dishType && (
            <View style={{marginTop: 20}}>
              <Input placeholder="Filter by dish type" />
            </View>
          )}
        </View>

        <View style={[generalStyles.body, {marginTop: 30}]}>
          <TitleAndIcon
            contentsDisplayed={display?.dietType}
            toggleDisplay={() => toggleDisplay('dietType')}>
            Diet Type
          </TitleAndIcon>

          {display?.dietType && (
            <View style={{marginTop: 20}}>
              <Input
                placeholder="Filter by dish type"
                value={dietType}
                onChangeText={text => setDietType(text)}
              />
              <AutoCompleteModal
                options={allDietTypes}
                searchTerm={dietType}
                onPress={params => {}}
              />
            </View>
          )}
        </View>

        <View style={[generalStyles.body, {marginTop: 30}]}>
          <TitleAndIcon
            contentsDisplayed={display?.excludeIngridient}
            toggleDisplay={() => toggleDisplay('excludeIngridient')}>
            Exclude Ingredient
          </TitleAndIcon>

          {display?.excludeIngridient && (
            <View style={{marginTop: 20}}>
              <Input placeholder="Filter by dish type" />
            </View>
          )}
        </View>

        <View style={[generalStyles.body, {marginTop: 30}]}>
          <TitleAndIcon
            contentsDisplayed={display?.includeIngridient}
            toggleDisplay={() => toggleDisplay('includeIngridient')}>
            Include Ingredient
          </TitleAndIcon>

          {display?.includeIngridient && (
            <View style={{marginTop: 20}}>
              <Input placeholder="Filter by dish type" />
              <View
                style={[
                  generalStyles.flexContainer,
                  {marginTop: 20, flexWrap: 'wrap'},
                ]}>
                <ItemTag>Vegeterian</ItemTag>
                <ItemTag>Vegeterian</ItemTag>
                <ItemTag>Veterian</ItemTag>
                <ItemTag>Vetan</ItemTag>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      {!hideButtons && (
        <View
          style={[
            generalStyles.body,
            {
              position: 'absolute',
              bottom: bottom + 20,
              width: width - SCREEN_HORIZONTAL_SPACING * 2,
            },
          ]}>
          <Button containerStyle={[]} onPress={() => {}}>
            Apply Filter
          </Button>
          <Button containerStyle={[{marginTop: 15}]} mode="successInverse">
            Reset
          </Button>
        </View>
      )}
    </Screen>
  );
};

export default Filter;
