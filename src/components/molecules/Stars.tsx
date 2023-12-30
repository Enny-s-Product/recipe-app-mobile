import {View, Text} from 'react-native';
import React from 'react';
import {ActiveStarIcon, InactiveStarIcon} from '../atoms/Icons';

interface IProps {
  no: number;
}

const Stars: React.FC<IProps> = ({no}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {typeof no === 'number' &&
        Array(no)
          .fill('')
          .map((item, index) => (
            <View key={index} style={{marginRight: 8}}>
              <ActiveStarIcon />
            </View>
          ))}
      {typeof no === 'number' &&
        Array(5 - no)
          .fill('')
          .map((item, index) => (
            <View key={index} style={{marginRight: 8}}>
              <InactiveStarIcon />
            </View>
          ))}
    </View>
  );
};

export default Stars;
