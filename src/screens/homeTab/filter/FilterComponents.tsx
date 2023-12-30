import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import generalStyles from '../../../styles';
import Typography, {Label} from '../../../components/atoms/Typography';
import {ReactNode} from 'react';
import {
  BlackCancelIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '../../../components/atoms/Icons';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';

interface ITitleAndIconProps {
  children: ReactNode;
  contentsDisplayed?: boolean;
  toggleDisplay: () => void;
}

export const TitleAndIcon: React.FC<ITitleAndIconProps> = ({
  children,
  contentsDisplayed,
  toggleDisplay,
}) => {
  return (
    <View
      style={[generalStyles.flexContainer, {justifyContent: 'space-between'}]}>
      <Label size={18}>{children}</Label>

      <TouchableOpacity onPress={toggleDisplay}>
        {!contentsDisplayed ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </TouchableOpacity>
    </View>
  );
};

interface IItemTagProps {
  children: ReactNode;
}

export const ItemTag: React.FC<IItemTagProps> = ({children}) => {
  const {themeColors} = useTheme();
  return (
    <View style={[styles.itemTag, {backgroundColor: themeColors.successText}]}>
      <Typography size={14} weight="medium" color="inverse">
        {children}
      </Typography>
      <TouchableOpacity style={[styles.itemTagCloseIcon]}>
        <BlackCancelIcon size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemTag: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 19,
    marginBottom: 20,
    marginRight: 15,
  },
  itemTagCloseIcon: {
    position: 'absolute',
    right: -5,
    top: -5,
  },
});
