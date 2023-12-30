import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import Screen from '../../../components/template/Screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {IHomeStackParamsList} from '../../../navigators/HomeNavigator';
import generalStyles, {generalStylesWithParams} from '../../../styles';
import Typography, {Label} from '../../../components/atoms/Typography';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Dot from '../../../components/atoms/Dot';

type INotificationsProps = React.FC<
  StackScreenProps<IHomeStackParamsList, 'Notifications'> & {}
>;

const Notifications: INotificationsProps = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Screen>
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 100}}>
        <View style={[generalStyles.body, {marginTop: 19}]}>
          <Label size={28}>Notifications</Label>
        </View>
        <View style={[generalStylesWithParams({mt: 40}).margin]}>
          <NotificationItem
            title="Here’s what you’re having for lunch today!"
            text="Chicken Teriyaki Noodles"
            time="20 mins ago"
          />
          <NotificationItem
            title="Here’s what you’re having for lunch today!"
            text="Chicken Teriyaki Noodles"
            time="20 mins ago"
          />
          <NotificationItem
            title="Here’s what you’re having for lunch today!"
            text="Chicken Teriyaki Noodles"
            time="20 mins ago"
            read
          />
          <NotificationItem
            title="Here’s what you’re having for lunch today!"
            text="Chicken Teriyaki Noodles"
            time="20 mins ago"
            read
            hideBorder
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

const IMAGE = require('../../../assets/images/chicken-noodles.jpeg');

interface INotificationItemProps {
  title: string;
  text: string;
  time: string;
  read?: boolean;
  hideBorder?: boolean;
}

const NotificationItem: React.FC<INotificationItemProps> = ({
  title,
  text,
  time,
  read,
  hideBorder,
}) => {
  const {themeColors} = useTheme();
  return (
    <View
      style={[
        generalStyles.paddingBody,
        generalStyles.flexContainer,
        styles.notificationItemContainer,
        {
          borderBottomWidth: hideBorder ? 0 : 1,
          borderBottomColor: themeColors.secondaryBorderColor,
        },
      ]}>
      <Image style={styles.image} source={IMAGE} />
      <View
        style={[
          generalStylesWithParams({ml: 14}).margin,
          styles.textContainer,
        ]}>
        <Typography size={14} weight="semi-bold">
          {title}{' '}
        </Typography>
        <Typography size={14} weight="semi-bold" color="success">
          {text}
        </Typography>
        <View
          style={[generalStyles.flexContainer, generalStyles.justifyBetween]}>
          <Typography
            size={10}
            weight="medium"
            style={{color: themeColors.tabbarInactive}}>
            {time}
          </Typography>
          {!read && <Dot size={12} color="#FFB126" />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItemContainer: {
    paddingVertical: 22,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
});

export default Notifications;
