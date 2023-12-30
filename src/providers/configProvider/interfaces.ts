import {ReactNode} from 'react';

export type IConfigProviderProps = React.FC<{
  children?: ReactNode;
}>;

export type NavState = 'onboarding' | 'dashboard';
export type OnboardingState = 'login' | 'signup';

export interface IConfigContext {
  isReady: boolean;
  checkReady: () => Promise<boolean>;
  completeReady: () => void;
  navState: NavState;
  handleNavState: (state: NavState) => void;
  onBoardingState: OnboardingState;
  handleOnboardingState: (state: OnboardingState) => void;
  notificationToken: null | string;
}
