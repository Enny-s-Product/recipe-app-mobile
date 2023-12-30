import ApiClient from '../configs/api.config';
import {IApiResponse, IStatusWithData, IUserDetails} from '../types';
import {returnError, returnResponse} from '../utils/api.util';
import {
  IChangePasswordRequest,
  ILoginRequest,
  IOnboardingOtpRequest,
  IPasswordResetOtpRequest,
  IPasswordResetRequest,
  ISignupRequest,
  IVerifyOtpRequest,
} from '../types/requests/Auth';
import {AuthApiRoutes} from '../constants/apiRoutes';

export class AuthService {
  constructor() {}

  static async onboardingOtpApi(
    data: IOnboardingOtpRequest,
  ): Promise<IApiResponse> {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient().post(AuthApiRoutes.ONBOARDING_OTP, data);

      return returnResponse(response);
    } catch (error: any) {
      return returnError(error);
    }
  }

  static async verifyOtpApi(data: IVerifyOtpRequest): Promise<IApiResponse> {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient().post(AuthApiRoutes.VERIFY_OTP, data);

      return returnResponse(response);
    } catch (error: any) {
      return returnError(error);
    }
  }

  static async signupApi(data: ISignupRequest): Promise<IApiResponse> {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient().post(AuthApiRoutes.SIGN_UP, data);

      return returnResponse(response);
    } catch (error: any) {
      return returnError(error);
    }
  }

  static async loginApi(
    data: ILoginRequest,
  ): Promise<IApiResponse<IUserDetails>> {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient().post(AuthApiRoutes.LOGIN, data);

      return returnResponse<IUserDetails>(response);
    } catch (error: any) {
      return returnError(error);
    }
  }

  static async changePasswordApi(
    data: IChangePasswordRequest,
  ): Promise<IApiResponse> {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient().post(AuthApiRoutes.CHANGE_PASSWORD, data);

      return returnResponse(response);
    } catch (error: any) {
      return returnError(error);
    }
  }

  static async passwordResetApi(
    data: IPasswordResetRequest,
  ): Promise<IApiResponse> {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient().post(AuthApiRoutes.PASSWORD_RESET, data);

      return returnResponse(response);
    } catch (error: any) {
      return returnError(error);
    }
  }

  static async passwordResetOtpApi(
    data: IPasswordResetOtpRequest,
  ): Promise<IApiResponse> {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient().post(
          AuthApiRoutes.PASSWORD_RESET_OTP,
          data,
        );

      return returnResponse(response);
    } catch (error: any) {
      return returnError(error);
    }
  }
}
