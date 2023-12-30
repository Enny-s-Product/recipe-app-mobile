import {
  Image,
  Pressable,
  PressableProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../../../providers/themeProvider/ThemeProvider';
import generalStyles from '../../../styles';
import Typography, {Label} from '../../../components/atoms/Typography';
import {
  BinIcon,
  GrayCloseIcon,
  SaveIcon,
} from '../../../components/atoms/Icons';
import {ReactNode} from 'react';
import Input from '../../../components/atoms/Input';
import PressableInput from '../../../components/atoms/PressableInput';
import Button from '../../../components/atoms/Button';

const EXPLORE_IMAGE = require('../../../assets/images/french-toast.jpg');
const EXPLORE_IMAGE_2 = require('../../../assets/images/french-toast-2.jpg');

interface IMealPlansCardProps {
  recommendedPlans?: boolean;
  onPressContainer?: () => void;
}

export const MealPlanCard: React.FC<IMealPlansCardProps> = ({
  recommendedPlans,
  onPressContainer,
}) => {
  const {themeColors} = useTheme();

  return (
    <Pressable onPress={onPressContainer}>
      <View
        style={[
          styles.mealPlansCard,
          {backgroundColor: themeColors.background, flex: 21},
        ]}>
        <View style={[generalStyles.flexContainer]}>
          <View style={{flex: 8}}>
            <Image
              style={{
                width: '100%',
                height: 150,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 5,
              }}
              source={EXPLORE_IMAGE_2}
            />
          </View>
          <View style={{flex: 1}}></View>
          <View style={{flex: 12}}>
            <Image
              style={{
                width: '100%',
                height: 72,
                borderBottomLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
              source={EXPLORE_IMAGE}
            />
            <View style={{height: 6}}></View>
            <Image
              style={{
                width: '100%',
                height: 72,
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
              }}
              source={EXPLORE_IMAGE}
            />
          </View>
        </View>
        <View
          style={[
            generalStyles.flexContainer,
            {paddingLeft: 8, paddingRight: 20, paddingVertical: 20, flex: 10},
          ]}>
          <View style={{flex: 5}}>
            <Typography size={16} weight="bold">
              Low Calorie Diet
            </Typography>
            <Typography size={14} color="secondary" style={{marginTop: 12}}>
              10 recipes
            </Typography>
          </View>
          <View style={{flex: 5, alignItems: 'flex-end'}}>
            <Pressable>
              {recommendedPlans ? <SaveIcon /> : <BinIcon />}
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

interface ICreateButtonProps extends PressableProps {
  children: ReactNode;
}

export const CreateButton: React.FC<ICreateButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      <View style={[generalStyles.flexContainer]}>
        <Typography size={18} weight="semi-bold" color="success">
          {children}
        </Typography>
      </View>
    </Pressable>
  );
};

interface IModalContentMealPlan {
  closeModal: () => void;
  onSubmit: () => void;
}

export const ModalContentMealPlan: React.FC<IModalContentMealPlan> = ({
  closeModal,
  onSubmit,
}) => {
  const {themeColors} = useTheme();
  return (
    <View style={{padding: 10}}>
      <View
        style={[
          generalStyles.flexContainer,
          {justifyContent: 'space-between'},
        ]}>
        <Label>Create Meal Plan</Label>
        <TouchableOpacity onPress={closeModal}>
          <GrayCloseIcon />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Input
          placeholder="Name"
          mb={18}
          placeholderTextColor={themeColors.secondary}
        />
        <PressableInput placeholder="Length of meal plan" mb={18} />
      </View>
      <Button containerStyle={[{marginTop: 18}]} radius={8} onPress={onSubmit}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mealPlansCard: {
    borderRadius: 5,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
