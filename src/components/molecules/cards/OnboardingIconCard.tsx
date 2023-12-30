import {ReactNode} from 'react';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {Pressable, PressableProps, View} from 'react-native';
import {BlackCircleTickIcon} from '../../atoms/Icons';
import Typography from '../../atoms/Typography';

interface ICardContainerProps extends PressableProps {
  icon?: ReactNode;
  children?: ReactNode;
  active?: boolean;
  empty?: boolean;
}

const OnboardingIconsCard: React.FC<ICardContainerProps> = ({
  icon,
  active,
  children,
  empty,
  ...props
}) => {
  const {themeColors} = useTheme();
  return (
    <Pressable
      {...props}
      style={[
        {
          flex: 5,
          backgroundColor: empty ? themeColors.fadeBg : themeColors.background,
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          height: 110,
          justifyContent: 'center',
          position: 'relative',
        },
      ]}>
      {active && (
        <View style={[{position: 'absolute', top: 10, right: 10}]}>
          <BlackCircleTickIcon />
        </View>
      )}
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {icon}
        <Typography size={12} weight="medium" center style={{marginTop: 10}}>
          {children}
        </Typography>
      </View>
    </Pressable>
  );
};

export default OnboardingIconsCard;
