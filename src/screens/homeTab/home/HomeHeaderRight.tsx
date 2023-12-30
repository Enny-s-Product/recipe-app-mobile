import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  NotificationIcon,
  ProfileImageIcon,
} from '../../../components/atoms/Icons';
import generalStyles from '../../../styles';
import {useNavigation} from '@react-navigation/native';

const HomeHeaderRight = () => {
  const navigation: any = useNavigation();
  return (
    <View style={[generalStyles.body]}>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeaderRight;
