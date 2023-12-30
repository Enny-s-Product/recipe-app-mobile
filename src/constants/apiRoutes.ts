export enum AuthApiRoutes {
  ONBOARDING_OTP = '/auth/onboarding/otp',
  VERIFY_OTP = '/auth/onboarding/otp/verify',
  SIGN_UP = '/auth/signup',
  LOGIN = '/auth/login',
  CHANGE_PASSWORD = '/auth/change-password',
  PASSWORD_RESET = '/auth/password-reset',
  PASSWORD_RESET_OTP = '/auth/password-reset/otp',
}

export enum ProfileApiRoutes {
  PROFILE_INGRIDIENTS = '/profile/ingedients',
}

export enum RootApiRoutes {
  HEALTH_CONDITIONS = '/healthconditions',
}
