import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/onbaording/login/Login';
import {navStyles} from './styles';
import {useTheme} from '../providers/themeProvider/ThemeProvider';
import ForgotPassword from '../screens/onbaording/forgotPassword/ForgotPassword';
import ForgotPasswordVerification from '../screens/onbaording/forgotPasswordVerification/ForgotPasswordVerification';
import ResetPassword from '../screens/onbaording/resetPassword/ResetPassword';
import GetStarted from '../screens/onbaording/getStarted/GetStarted';
import AccountVerification from '../screens/onbaording/accountVerification/AccountVerification';
import WelcomeTour from '../screens/onbaording/welcomeTour/WelcomeTour';
import PersonalizeTasteAdventure from '../screens/onbaording/personalizeTasteAdventure/PersonalizeTasteAdventure';
import MedicalCondition from '../screens/onbaording/medicalCondition/MedicalCondition';
import DietaryRequirement from '../screens/onbaording/dietaryRequirement/DietaryRequipment';
import Allergies from '../screens/onbaording/allergies/Allergies';
import PersonalPreference from '../screens/onbaording/personalPreference/PersonalPreference';
import UnlockPremiumFeatures from '../screens/onbaording/unlockPremiumFeatures/UnlockPremiumFeatures';
import Loading from '../screens/onbaording/loading/Loading';
import {useConfig} from '../providers/configProvider/ConfigProvider';

export type IOnboardingStackParamsList = {
  WelcomeTour: undefined;
  Login: undefined;
  GetStarted: undefined;
  AccountVerification: {email: string; firstName: string; password: string};
  ForgotPassword: undefined;
  ForgotPasswordVerification: {email: string};
  ResetPassword: {email: string};
  PersonalizeTasteAdventure: undefined;
  MedicalCondition: undefined;
  DietaryRequirement: undefined;
  Allergies: undefined;
  Loading: undefined;
  PersonalPreference: undefined;
  UnlockPremiumFeatures: undefined;
};

const OnboardingNav = createStackNavigator<IOnboardingStackParamsList>();

const OnboardingNavigator = () => {
  const {themeColors} = useTheme();
  const {onBoardingState, isReady} = useConfig();

  return (
    <OnboardingNav.Navigator
      initialRouteName={
        isReady
          ? 'WelcomeTour'
          : onBoardingState === 'login'
          ? 'Login'
          : 'GetStarted'
      }
      screenOptions={{
        headerTitleStyle: [
          navStyles.headerTitle,
          {color: themeColors.blackWhite},
        ],
        headerTitleAlign: 'center',
        headerStyle: [navStyles.defaultHeader],
      }}>
      <OnboardingNav.Screen
        name="WelcomeTour"
        component={WelcomeTour}
        options={{headerTitle: ''}}
      />
      <OnboardingNav.Screen
        name="Login"
        component={Login}
        options={{headerTitle: ''}}
      />
      <OnboardingNav.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerTitle: ''}}
      />
      <OnboardingNav.Screen
        name="AccountVerification"
        component={AccountVerification}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: themeColors.fadeBg,
          },
        }}
      />
      <OnboardingNav.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerTitle: 'Forgot Password'}}
      />
      <OnboardingNav.Screen
        name="ForgotPasswordVerification"
        component={ForgotPasswordVerification}
        options={{headerTitle: 'Forgot Password'}}
      />
      <OnboardingNav.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerTitle: 'Reset Password'}}
      />
      <OnboardingNav.Screen
        name="PersonalizeTasteAdventure"
        component={PersonalizeTasteAdventure}
        options={{
          headerTitle: '',
        }}
      />
      <OnboardingNav.Screen
        name="MedicalCondition"
        component={MedicalCondition}
        options={{
          headerTitle: '',
        }}
      />
      <OnboardingNav.Screen
        name="DietaryRequirement"
        component={DietaryRequirement}
        options={{
          headerTitle: '',
        }}
      />
      <OnboardingNav.Screen
        name="Allergies"
        component={Allergies}
        options={{
          headerTitle: '',
        }}
      />
      <OnboardingNav.Screen
        name="PersonalPreference"
        component={PersonalPreference}
        options={{
          headerTitle: '',
        }}
      />
      <OnboardingNav.Screen
        name="UnlockPremiumFeatures"
        component={UnlockPremiumFeatures}
        options={{
          headerShown: false,
        }}
      />
      <OnboardingNav.Screen
        name="Loading"
        component={Loading}
        options={{
          headerShown: false,
        }}
      />
    </OnboardingNav.Navigator>
  );
};

export default OnboardingNavigator;
