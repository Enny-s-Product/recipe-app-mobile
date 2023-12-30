import {ReactNode} from 'react';
import {
  Pressable,
  PressableProps,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import Typography from '../../../components/atoms/Typography';
import generalStyles from '../../../styles';

interface IEditButtonProps extends PressableProps {
  children: ReactNode;
}

export const EditButton: React.FC<IEditButtonProps> = ({children, ...rest}) => {
  const {themeColors} = useTheme();
  return (
    <Pressable {...rest}>
      <View
        style={{
          width: 114,
          height: 36,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 19,
          borderWidth: 1,
          borderColor: themeColors.secondaryBorderColor,
        }}>
        <Typography size={14} weight="semi-bold" color="darkGreen">
          {children}
        </Typography>
      </View>
    </Pressable>
  );
};

interface IItemWrapperProps extends TouchableHighlightProps {
  children: ReactNode;
  icon: ReactNode;
}

export const ItemWrapper: React.FC<IItemWrapperProps> = ({
  children,
  icon,
  ...rest
}) => {
  const {themeColors} = useTheme();
  return (
    <TouchableHighlight {...rest} underlayColor="rgba(0,0,0,0.05)">
      <View
        style={[
          generalStyles.paddingBody,
          generalStyles.flexContainer,
          {paddingVertical: 13},
        ]}>
        <View
          style={[
            {
              borderRadius: 5,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: themeColors.inputIconBg,
            },
          ]}>
          {icon}
        </View>
        <Typography size={16} weight="medium" style={{marginLeft: 17}}>
          {children}
        </Typography>
      </View>
    </TouchableHighlight>
  );
};
