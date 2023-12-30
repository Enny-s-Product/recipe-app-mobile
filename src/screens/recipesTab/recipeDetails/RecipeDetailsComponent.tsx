import {Pressable, TouchableHighlight, View} from 'react-native';
import generalStyles, {generalStylesWithParams} from '../../../styles';
import Typography from '../../../components/atoms/Typography';
import {ReactNode} from 'react';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import {LocateIcon, ShareIcon} from '../../../components/atoms/Icons';

interface IPercentageContainerProps {
  color: string;
  children: ReactNode;
  title: string;
}

export const PercentageContainer: React.FC<IPercentageContainerProps> = ({
  color,
  children,
  title,
}) => {
  return (
    <>
      <Typography size={12} weight="semi-bold" style={{marginBottom: 6}}>
        {title}
      </Typography>
      <View style={[generalStyles.flexContainer]}>
        <View
          style={[
            generalStylesWithParams({size: 12}).box,
            {backgroundColor: color},
          ]}></View>
        <Typography
          size={12}
          color="ash"
          weight="medium"
          style={{marginLeft: 6}}>
          {children}
        </Typography>
      </View>
    </>
  );
};

export const NutritionContainer = () => {
  const {themeColors} = useTheme();
  return (
    <View style={[generalStyles.flexContainer, {flex: 10}]}>
      <View
        style={[
          generalStyles.centralizeItem,
          {
            paddingVertical: 15,
            backgroundColor: themeColors.fadeBg,
            flex: 2,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          },
        ]}>
        <Typography size={20}>A</Typography>
      </View>
      <View
        style={[
          generalStyles.centralizeItem,
          {paddingVertical: 15, backgroundColor: themeColors.fadeBg, flex: 2},
        ]}>
        <Typography size={20}>B</Typography>
      </View>
      <View
        style={[
          generalStyles.centralizeItem,
          {
            paddingVertical: 25,
            backgroundColor: themeColors.successText,
            flex: 2,
            borderRadius: 8,
          },
        ]}>
        <Typography size={20} weight="semi-bold" color="inverse">
          C
        </Typography>
      </View>
      <View
        style={[
          generalStyles.centralizeItem,
          {paddingVertical: 15, backgroundColor: themeColors.fadeBg, flex: 2},
        ]}>
        <Typography size={20}>D</Typography>
      </View>
      <View
        style={[
          generalStyles.centralizeItem,
          {
            paddingVertical: 15,
            backgroundColor: themeColors.fadeBg,
            flex: 2,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          },
        ]}>
        <Typography size={20}>E</Typography>
      </View>
    </View>
  );
};

export const LocateButton = () => {
  const {themeColors} = useTheme();
  return (
    <Pressable style={[]}>
      <View
        style={[
          generalStylesWithParams({width: 174, height: 46, radius: 12}).rounded,
          {borderWidth: 1, borderColor: themeColors.secondary},
          generalStyles.flexContainer,
          generalStyles.centralizeItem,
        ]}>
        <Typography
          size={12}
          weight="semi-bold"
          color="secondary"
          style={{marginRight: 8}}>
          LOCATE MATERIALS
        </Typography>
        <LocateIcon />
      </View>
    </Pressable>
  );
};

interface INumberContainerProps {
  children: ReactNode;
}

export const NumberContainer: React.FC<INumberContainerProps> = ({
  children,
}) => {
  const {themeColors} = useTheme();
  return (
    <View
      style={[
        generalStylesWithParams({size: 24}).rounded,
        generalStyles.centralizeItem,
        {backgroundColor: themeColors.successText},
      ]}>
      <Typography size={12} weight="semi-bold" color="inverse">
        {children}
      </Typography>
    </View>
  );
};

export const ShareButton = () => {
  const {themeColors} = useTheme();
  return (
    <TouchableHighlight>
      <View
        style={[
          generalStyles.flexContainer,
          {
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 5,
            backgroundColor: themeColors.fadeBg,
          },
        ]}>
        <ShareIcon />
        <Typography size={16} weight="medium" style={{marginLeft: 8}}>
          Share this recipe
        </Typography>
      </View>
    </TouchableHighlight>
  );
};
