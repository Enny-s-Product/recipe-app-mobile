import {TouchableOpacity, View} from 'react-native';
import generalStyles from '../../../styles';
import Typography from '../../../components/atoms/Typography';
import {ReactNode} from 'react';
import {GreenChevronRightIcon} from '../../../components/atoms/Icons';

interface IPreferecesItemProps {
  children: ReactNode;
  onPress: () => void;
}

export const PreferecesItem: React.FC<IPreferecesItemProps> = ({
  children,
  onPress,
}) => {
  return (
    <View
      style={[generalStyles.flexContainer, {flex: 10, paddingVertical: 25}]}>
      <View style={{flex: 6}}>
        <Typography size={18} color="secondary">
          {children}
        </Typography>
      </View>
      <View style={{flex: 4, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={onPress}>
          <View style={[generalStyles.flexContainer]}>
            <Typography size={12} color="success" style={{marginRight: 6}}>
              Edit
            </Typography>
            <GreenChevronRightIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
