import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/template/Screen';
import {Label} from '../../../components/atoms/Typography';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import generalStyles from '../../../styles';
import IconInput from '../../../components/atoms/IconInput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  SearchIcon,
  WhiteFilterIcon,
  WhiteSearchIcon,
} from '../../../components/atoms/Icons';
import {ExploreCard, PopularTag} from './ExploreComponents';
import {popularTags} from './explore.hook';

type IExploreProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'Explore'> & {}
>;

const Explore: IExploreProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const [searchterm, setSearchTerm] = useState('');

  const handlePressIcon = () => {
    if (searchterm.trim().length > 0) {
      // handle search
    } else {
      navigation.navigate('Filter');
    }
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={30}>Explore</Label>
          <IconInput
            value={searchterm}
            onChangeText={text => setSearchTerm(text)}
            onPressIcon={handlePressIcon}
            containerStyle={[{marginTop: 27}]}
            leftIcon={searchterm.trim().length === 0 && <SearchIcon />}
            rightIcon={
              searchterm.trim().length > 0 ? (
                <WhiteSearchIcon />
              ) : (
                <WhiteFilterIcon />
              )
            }
          />
        </View>
        {/* <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={20}>Quick Search</Label>
          <View
            style={[
              generalStyles.flexContainer,
              {marginTop: 16, flexWrap: 'wrap'},
            ]}>
            <View style={{width: '33.3%', height: 120, marginBottom: 24}}>
              <QuickSearchContainer text="Pizza" />
            </View>
            <View style={{width: '33.3%', height: 120, marginBottom: 24}}>
              <QuickSearchContainer text="Pizza" />
            </View>
            <View style={{width: '33.3%', height: 120, marginBottom: 24}}>
              <QuickSearchContainer text="Pizza" />
            </View>
            <View style={{width: '33.3%', height: 120, marginBottom: 24}}>
              <QuickSearchContainer text="Pizza" />
            </View>
            <View style={{width: '33.3%', height: 120, marginBottom: 24}}>
              <QuickSearchContainer text="Pizza" />
            </View>
            <View style={{width: '33.3%', height: 120, marginBottom: 24}}>
              <QuickSearchContainer text="Pizza" />
            </View>
          </View>
        </View> */}
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {marginTop: 36, flex: 10, flexWrap: 'wrap'},
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
        <View style={[generalStyles.body, {marginTop: 36}]}>
          <Label size={20}>Popular tags</Label>
          <View
            style={[
              generalStyles.flexContainer,
              {flexWrap: 'wrap', marginTop: 16},
            ]}>
            {popularTags.map((item, index) => (
              <PopularTag key={index}>{item}</PopularTag>
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Explore;
