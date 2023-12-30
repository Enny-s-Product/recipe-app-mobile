import {View} from 'react-native';
import React from 'react';
import {generalStylesWithParams} from '../../styles';

interface IProps {
  size: number;
  color: string;
}

const Dot: React.FC<IProps> = ({size, color}) => {
  return (
    <View
      style={[
        generalStylesWithParams({size}).rounded,
        {backgroundColor: color},
      ]}></View>
  );
};

export default Dot;
