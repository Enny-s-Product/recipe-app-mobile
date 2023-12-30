import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import generalStyles from '../../../styles';
import Typography, {Label} from '../../../components/atoms/Typography';
import {JewelIcon} from '../../../components/atoms/Icons';

type IManageSubscriptionsProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'ManageSubscriptions'> & {}
>;

const ManageSubscriptions: IManageSubscriptionsProps = () => {
  const {bottom} = useSafeAreaInsets();
  const {themeColors} = useTheme();

  return (
    <Screen>
      <ScrollView>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={24}>Manage subscription</Label>
        </View>
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            styles.card,
            {marginTop: 40, alignItems: 'flex-start'},
          ]}>
          <JewelIcon />
          <View style={{marginLeft: 10}}>
            <Typography size={18} weight="medium">
              Premium subscription plan
            </Typography>
            <Typography
              size={28}
              weight="bold"
              color="success"
              style={{marginTop: 2}}>
              $ 4.25/month
            </Typography>
            <Typography
              size={14}
              weight="medium"
              color="secondary"
              style={{marginTop: 2}}>
              Renews on July 24 2023
            </Typography>
          </View>
        </View>
        <View
          style={[
            generalStyles.body,
            generalStyles.flexContainer,
            {marginTop: 20, justifyContent: 'flex-end'},
          ]}>
          <TouchableOpacity>
            <Typography color="error" size={12} weight="semi-bold">
              CANCEL SUBSCRIPTION
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderRadius: 8,
    backgroundColor: '#E6FBF480',
  },
});

export default ManageSubscriptions;
