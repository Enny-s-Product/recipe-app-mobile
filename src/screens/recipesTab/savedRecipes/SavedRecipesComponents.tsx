import {TouchableHighlight, TouchableHighlightProps, View} from 'react-native';
import generalStyles, {generalStylesWithParams} from '../../../styles';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {AddIcon} from '../../../components/atoms/Icons';
import Typography from '../../../components/atoms/Typography';
import {ReactNode} from 'react';

interface IAddButtonProps extends TouchableHighlightProps {
  children: ReactNode;
}

export const AddItemButton: React.FC<IAddButtonProps> = ({
  children,
  ...rest
}) => {
  const {themeColors} = useTheme();
  return (
    <TouchableHighlight {...rest}>
      <View
        style={[
          generalStyles.flexContainer,
          generalStyles.centralizeItem,
          generalStylesWithParams({width: 166, height: 56, radius: 10}).rounded,
          {
            borderWidth: 1,
            backgroundColor: themeColors.background,
            borderColor: themeColors.borderColor,
          },
        ]}>
        <AddIcon />
        <Typography size={14} color="secondary" style={{marginLeft: 10}}>
          {children}
        </Typography>
      </View>
    </TouchableHighlight>
  );
};
