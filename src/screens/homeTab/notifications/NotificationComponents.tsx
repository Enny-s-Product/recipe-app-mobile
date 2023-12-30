import {Image, Pressable, View} from 'react-native';
import generalStyles, {generalStylesWithParams} from '../../../styles';

interface INotificationsContainer {
  image?: string;
  title: string;
  body: string;
}

const IMAGE = require('../../../assets/images/roasted-chicken.jpg');

export const NotificationsContainer: React.FC<INotificationsContainer> = ({
  image,
  title,
  body,
}) => {
  return (
    <Pressable>
      <View style={[generalStyles.flexContainer]}>
        <Image
          source={IMAGE}
          style={[generalStylesWithParams({size: 45, radius: 4}).box]}
        />
      </View>
    </Pressable>
  );
};
