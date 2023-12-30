import {
  View,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {TouchableHighlightProps} from 'react-native-gesture-handler';
import {useTheme} from '../../providers/themeProvider/ThemeProvider';
import Typography from './Typography';

interface IProps extends TouchableHighlightProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  icon: ReactNode;
}

const SocialMediaButton: React.FC<IProps> = ({
  containerStyle,
  children,
  buttonStyle,
  icon,
  ...rest
}) => {
  const {themeColors} = useTheme();

  return (
    <View style={[containerStyle]}>
      <TouchableHighlight underlayColor="rgba(0,0,0,0.05)" {...rest}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 44,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: themeColors.socialMediaButton,
            borderColor: themeColors.socialMediaButtonBorder,
          }}>
          {icon}
          <Typography size={16} weight="medium" style={{marginLeft: 10}}>
            {children}
          </Typography>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default SocialMediaButton;
