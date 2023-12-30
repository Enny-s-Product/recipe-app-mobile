import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/template/Screen';
import generalStyles from '../../../styles';
import Typography from '../../../components/atoms/Typography';
import Input from '../../../components/atoms/Input';
import {SearchIcon} from '../../../components/atoms/Icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN_HORIZONTAL_SPACING} from '../../../configs/data.config';
import {
  HeaderAndSeeAllButton,
  PopularCategoryContainer,
  PopularCategoryTab,
  RecentRecipeContainer,
  RecommendationsCard,
} from './HomeComponents';
import {allRecipeCategories} from './home.hook';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';

type IHomeProps = React.FC<StackScreenProps<IHomeStackParamsList, 'Home'> & {}>;

const Home: IHomeProps = ({navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('');

  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 50}}>
        <View style={[generalStyles.body, {marginTop: 20}]}>
          <Typography size={14} weight="medium" color="fade">
            Hello Michael
          </Typography>
          <Typography
            size={26}
            weight="bold"
            style={{marginTop: 7, width: '80%'}}>
            Find best recipes that suites{' '}
            <Typography size={26} weight="bold" color="success">
              {' '}
              you
            </Typography>
          </Typography>
        </View>
        <View style={[generalStyles.body, {marginTop: 20}]}>
          <Input
            leftIcon={<SearchIcon />}
            placeholder="Search"
            onFocus={() => navigation.navigate('Explore')}
          />
          <Typography size={20} weight="bold" style={{marginTop: 22}}>
            Your preferred recommendations
          </Typography>
        </View>
        <ScrollView
          horizontal
          style={{marginLeft: SCREEN_HORIZONTAL_SPACING, marginTop: 23}}
          showsHorizontalScrollIndicator={false}>
          <RecommendationsCard />
          <RecommendationsCard />
          <RecommendationsCard />
          <RecommendationsCard />
          <RecommendationsCard />
          <RecommendationsCard />
          <RecommendationsCard />
        </ScrollView>
        <View style={[generalStyles.body, {marginTop: 50}]}>
          <HeaderAndSeeAllButton text="Trending Recipes" onPress={() => {}} />
        </View>
        <View style={[generalStyles.body, {marginTop: 50}]}>
          <HeaderAndSeeAllButton text="Recent Recipes" onPress={() => {}} />
        </View>
        <ScrollView
          horizontal
          style={{marginLeft: SCREEN_HORIZONTAL_SPACING, marginTop: 23}}
          showsHorizontalScrollIndicator={false}>
          <RecentRecipeContainer
            headerText="Indonesian chicken burger"
            text="By Adrianna Curl"
          />
          <RecentRecipeContainer
            headerText="Indonesian chicken burger"
            text="By Adrianna Curl"
          />
          <RecentRecipeContainer
            headerText="Indonesian chicken burger"
            text="By Adrianna Curl"
          />
          <RecentRecipeContainer
            headerText="Indonesian chicken burger"
            text="By Adrianna Curl"
          />
          <RecentRecipeContainer
            headerText="Indonesian chicken burger"
            text="By Adrianna Curl"
          />
          <RecentRecipeContainer
            headerText="Indonesian chicken burger"
            text="By Adrianna Curl"
          />
        </ScrollView>
        <View style={[generalStyles.body, {marginTop: 50}]}>
          <HeaderAndSeeAllButton text="Popular category" />
        </View>
        <ScrollView
          horizontal
          style={{marginLeft: SCREEN_HORIZONTAL_SPACING, marginTop: 24}}
          showsHorizontalScrollIndicator={false}>
          {allRecipeCategories.map((item, index) => (
            <PopularCategoryTab
              key={index}
              active={activeTab === item}
              onPress={() => setActiveTab(item)}>
              {item}
            </PopularCategoryTab>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          style={{marginLeft: SCREEN_HORIZONTAL_SPACING, paddingTop: 74}}
          showsHorizontalScrollIndicator={false}>
          <PopularCategoryContainer />
          <PopularCategoryContainer />
          <PopularCategoryContainer />
          <PopularCategoryContainer />
          <PopularCategoryContainer />
          <PopularCategoryContainer />
        </ScrollView>
      </ScrollView>
    </Screen>
  );
};

export default Home;
