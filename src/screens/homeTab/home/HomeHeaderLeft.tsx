import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ProfileImageIcon} from '../../../components/atoms/Icons';
import generalStyles from '../../../styles';
import {useNavigation} from '@react-navigation/native';

const HomeHeaderLeft = () => {
  const navigation: any = useNavigation();
  return (
    <View style={[generalStyles.body]}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <ProfileImageIcon size={46} />
      </Pressable>
    </View>
  );
};

export default HomeHeaderLeft;
