export interface IOnboardingOtpRequest {
  email: string;
  firstName: string;
}

export interface IVerifyOtpRequest {
  email: string;
  firstName: string;
  otp: string;
}

export interface ISignupRequest {
  firstName: string;
  email: string;
  password: string;
  otp: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IChangePasswordRequest {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface IPasswordResetRequest {
  email: string;
  otp: string;
  newPassword: string;
}

export interface IPasswordResetOtpRequest {
  email: string;
  firstName: string;
}
