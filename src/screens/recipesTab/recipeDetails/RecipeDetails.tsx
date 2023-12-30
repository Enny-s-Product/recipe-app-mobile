import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Screen from '../../../components/template/Screen';
import {StackScreenProps} from '@react-navigation/stack';
import {IRecipesStackParamsList} from '../../../navigators/RecipesNavigator';
import {
  SCREEN_HEIGHT,
  SCREEN_HORIZONTAL_SPACING,
  SCREEN_WIDTH,
} from '../../../configs/data.config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Typography, {Label} from '../../../components/atoms/Typography';
import generalStyles, {generalStylesWithParams} from '../../../styles';
import {
  ExclamationIcon,
  HeaderLeftIcon,
  PadlockIcon,
  WhiteHeartIcon,
} from '../../../components/atoms/Icons';
import {
  LocateButton,
  NumberContainer,
  NutritionContainer,
  PercentageContainer,
  ShareButton,
} from './RecipeDetailsComponent';
import Dot from '../../../components/atoms/Dot';
import Stars from '../../../components/molecules/Stars';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';
import MultilineInput from '../../../components/atoms/MultilineInput';

type IRecipeDetailsProps = React.FC<
  StackScreenProps<IRecipesStackParamsList, 'RecipeDetails'> & {}
>;

const IMAGE = require('../../../assets/images/roasted-chicken.jpg');

const RecipeDetails: IRecipeDetailsProps = ({navigation}) => {
  const {bottom, top} = useSafeAreaInsets();
  const {themeColors} = useTheme();
  return (
    <Screen style={{position: 'relative'}}>
      <ImageBackground style={styles.imageBackground} source={IMAGE}>
        <ScrollView
          contentContainerStyle={[
            {
              marginTop: top + 10,
            },
          ]}>
          <View
            style={[
              generalStyles.flexContainer,
              generalStyles.body,
              {justifyContent: 'space-between'},
            ]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <HeaderLeftIcon />
            </TouchableOpacity>
            <Pressable
              style={[
                generalStylesWithParams({size: 41}).rounded,
                generalStyles.centralizeItem,
                {backgroundColor: themeColors.info},
              ]}>
              <WhiteHeartIcon />
            </Pressable>
          </View>
          <View
            style={[
              generalStyles.paddingBody,
              styles.contentsContainer,
              {
                marginTop: SCREEN_HEIGHT / 3,
                backgroundColor: themeColors.background,
                paddingBottom: bottom + 150,
              },
            ]}>
            <Label center size={24}>
              Roasted Citrus Chicken
            </Label>
            <View
              style={[generalStyles.flexContainer, {marginTop: 18, flex: 9}]}>
              <View
                style={[
                  styles.timeContainer,
                  {
                    borderRightColor: themeColors.thumbColor,
                    alignItems: 'flex-start',
                  },
                ]}>
                <Typography size={14} weight="medium" color="secondary">
                  Prep time
                </Typography>
                <Typography size={14} weight="semi-bold" style={{marginTop: 7}}>
                  20 mins
                </Typography>
              </View>
              <View
                style={[
                  styles.timeContainer,
                  {borderRightColor: themeColors.thumbColor},
                ]}>
                <Typography size={14} weight="medium" color="secondary">
                  Cooking time{' '}
                </Typography>
                <Typography size={14} weight="semi-bold" style={{marginTop: 7}}>
                  10 mins
                </Typography>
              </View>
              <View
                style={[
                  styles.timeContainer,
                  {borderRightWidth: 0, alignItems: 'flex-end'},
                ]}>
                <Typography size={14} weight="medium" color="secondary">
                  Total time
                </Typography>
                <Typography
                  size={14}
                  weight="semi-bold"
                  style={{marginTop: 7}}
                  color="success">
                  10 mins
                </Typography>
              </View>
            </View>

            <View style={[{marginTop: 35}]}>
              <Label size={16}>Nutritional values</Label>
              <View
                style={[
                  generalStyles.flexContainer,
                  {flex: 11, marginTop: 20},
                ]}>
                <View style={{flex: 4}}></View>
                <View style={{flex: 7}}>
                  <View style={[generalStyles.flexContainer, {flex: 9}]}>
                    <View style={{flex: 3}}>
                      <PercentageContainer color="#81C926D9" title="Carbs">
                        60%
                      </PercentageContainer>
                    </View>
                    <View style={{flex: 3}}>
                      <PercentageContainer color="#ED3A3AD9" title="Protein">
                        25%
                      </PercentageContainer>
                    </View>
                    <View style={{flex: 3}}>
                      <PercentageContainer color="#FFB126D9" title="Fat">
                        60%
                      </PercentageContainer>
                    </View>
                  </View>

                  <Label style={{marginTop: 8}}>Total Calories: 127 kcal</Label>
                </View>
              </View>
            </View>

            <View
              style={[
                generalStyles.flexContainer,
                {justifyContent: 'space-between', marginTop: 35},
              ]}>
              <Label size={16}>Nutrition Quality</Label>
              <ExclamationIcon />
            </View>
            <View style={[{marginVertical: 30}]}>
              <NutritionContainer />
            </View>
            <View>
              <Typography size={16} weight="medium" style={{lineHeight: 24}}>
                You’ve chosen overall healthy meal rich in nutrition and with a
                beneficial effect on overall health, though containing elements
                like sugar, saturated fats and cholesterol that are better taken
                in moderation.
              </Typography>
            </View>
            {/* <>
              <View style={{marginTop: 47}}>
                <Label>Ingredients</Label>
                <View style={[generalStyles.flexContainer, {marginTop: 16}]}>
                  <Dot size={8} color="#000" />
                  <Typography size={14} style={{marginLeft: 8}}>
                    200g Chicken
                  </Typography>
                </View>
                <View style={[generalStyles.flexContainer, {marginTop: 16}]}>
                  <Dot size={8} color="#000" />
                  <Typography size={14} style={{marginLeft: 8}}>
                    200ml Vegetable oil
                  </Typography>
                </View>
                <View style={[generalStyles.flexContainer, {marginTop: 16}]}>
                  <Dot size={8} color="#000" />
                  <Typography size={14} style={{marginLeft: 8}}>
                    2 Carrots
                  </Typography>
                </View>
                <View style={[generalStyles.flexContainer, {marginTop: 16}]}>
                  <Dot size={8} color="#000" />
                  <Typography size={14} style={{marginLeft: 8}}>
                    150ml Soy sauce
                  </Typography>
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <LocateButton></LocateButton>
              </View>
              <View style={{marginTop: 20}}>
                <Label>Instructions</Label>
                <View style={[generalStyles.flexContainer, {marginTop: 25}]}>
                  <NumberContainer>1</NumberContainer>
                  <Typography
                    size={16}
                    style={{marginLeft: 12}}
                    weight="medium">
                    Set the oven to 350°F / 190°C.
                  </Typography>
                </View>
                <View style={[generalStyles.flexContainer, {marginTop: 25}]}>
                  <NumberContainer>2</NumberContainer>
                  <Typography
                    size={16}
                    style={{marginLeft: 12}}
                    weight="medium">
                    Set the oven to 350°F / 190°C.
                  </Typography>
                </View>
              </View>
              <View style={[{marginTop: 40}]}>
                <Typography size={14} weight="medium" center lh={16.41}>
                  If you enjoyed this recipe, why not share the deliciousness
                  with your friends and family
                </Typography>
              </View>
              <View style={[{marginTop: 18}, generalStyles.centralizeItem]}>
                <ShareButton />
              </View>
              <View style={[{marginTop: 40}]}>
                <Label weight="bold">Add your Review</Label>
                <View style={{marginTop: 8}}>
                  <Stars no={4} />
                </View>
              </View>
              <View style={{marginTop: 16}}>
                <MultilineInput placeholder="Comment" height={92} />
              </View>
              <Button containerStyle={[{marginTop: 35}]}>Submit</Button>
            </> */}
            <>
              <View
                style={[
                  generalStylesWithParams({mt: 40}).margin,
                  {alignItems: 'center'},
                ]}>
                <ImageBackground
                  style={[styles.vitaminImageBackground]}
                  borderRadius={16}
                  source={require('../../../assets/images/vitamins.jpeg')}>
                  <View style={styles.imageOverlay}></View>
                  <Typography size={18} weight="bold" color="inverse" center>
                    Vitamin Analysis
                  </Typography>
                  <Typography
                    size={13}
                    color="inverse"
                    center
                    style={[
                      generalStylesWithParams({mt: 5, mr: 10, ml: 10}).margin,
                    ]}
                    lh={24}>
                    Control nutrient balance to keep your health robust and your
                    body satisfied
                  </Typography>
                  <Button
                    containerStyle={[
                      generalStylesWithParams({mt: 20}).margin,
                      generalStyles.body,
                    ]}
                    rightIcon={<PadlockIcon />}
                    mode="success"
                    radius={10}>
                    VIEW WEEKLY REPORT
                  </Button>
                  <Pressable>
                    <Typography
                      color="inverse"
                      size={12}
                      weight="medium"
                      style={[generalStylesWithParams({mt: 15}).margin]}
                      center>
                      I’LL DO THIS LATER
                    </Typography>
                  </Pressable>
                </ImageBackground>
              </View>
              <View
                style={[
                  generalStylesWithParams({mt: 40}).margin,
                  {alignItems: 'center'},
                ]}>
                <View
                  style={[
                    generalStylesWithParams({bgColor: '#E5E5E5', size: 76})
                      .rounded,
                    generalStyles.centralizeItem,
                  ]}>
                  <PadlockIcon size={36} />
                </View>
              </View>
              <Typography
                size={18}
                weight="bold"
                center
                style={[generalStylesWithParams({mt: 15}).margin]}>
                Get Full Access
              </Typography>
              <Typography
                size={13}
                center
                lh={24}
                style={[
                  generalStylesWithParams({mt: 15, ml: 10, mr: 10}).margin,
                ]}>
                Access all our delicious recipes, created and compiled by
                professional nutritionists
              </Typography>
              <Button
                containerStyle={[generalStylesWithParams({mt: 14}).margin]}
                radius={16}>
                START YOUR PLAN
              </Button>
            </>
          </View>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
};

const IMAGE_SIZE = SCREEN_WIDTH - SCREEN_HORIZONTAL_SPACING * 4;

const styles = StyleSheet.create({
  imageBackground: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'contain',
  },
  contentsContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 44,
  },
  timeContainer: {
    flex: 3,
    borderRightWidth: 0.5,
    alignItems: 'center',
    paddingVertical: 8,
  },
  vitaminImageBackground: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: 16,
    position: 'relative',
    justifyContent: 'center',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});

export default RecipeDetails;
