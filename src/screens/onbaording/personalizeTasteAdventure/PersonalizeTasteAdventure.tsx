import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamsList} from '../../../navigators/OnboardingNavigator';
import Screen from '../../../components/template/Screen';
import generalStyles from '../../../styles';
import Typography, {Title} from '../../../components/atoms/Typography';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import StageIndicator from '../../../components/atoms/StagesIndicator';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';

type IPersonalizeTasteAdventureProps = React.FC<
  StackScreenProps<IOnboardingStackParamsList, 'PersonalizeTasteAdventure'> & {}
>;

const PersonalizeTasteAdventure: IPersonalizeTasteAdventureProps = ({
  navigation,
}) => {
  const {themeColors} = useTheme();
  const [name, setName] = useState('');
  return (
    <Screen fadeBg>
      <ScrollView>
        <View
          style={[
            generalStyles.paddingBody,
            styles.topContainer,

            {backgroundColor: themeColors.background},
          ]}>
          <Title size={18} center>
            Personalize Your Taste Adventure
          </Title>
          <Typography
            size={14}
            color="secondary"
            center
            style={{marginTop: 11, marginHorizontal: 15}}>
            By sharing a bit about you, we'll curate a menu that's uniquely
            yours
          </Typography>
          <View style={{marginTop: 22}}>
            <StageIndicator stage={1} />
          </View>
        </View>
        <View style={[generalStyles.body, {marginTop: 50}]}>
          <Typography
            size={18}
            color="secondary"
            center
            weight="bold"
            style={{marginBottom: 20}}>
            Let’s begin with your name
          </Typography>
          <Input
            containerStyle={{
              width: 236,
              alignSelf: 'center',
            }}
            value={name}
            onChangeText={text => setName(text)}
            whiteBg
            radius={4}
          />
          <Button
            onPress={() => navigation.navigate('MedicalCondition')}
            disabled={name.trim().length < 2}
            containerStyle={{
              width: 236,
              alignSelf: 'center',
              marginTop: 33,
            }}>
            Next
          </Button>
        </View>
      </ScrollView>
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

export default PersonalizeTasteAdventure;
