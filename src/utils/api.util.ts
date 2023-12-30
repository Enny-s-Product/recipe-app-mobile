import {AxiosError} from 'axios';
import {IApiResponse, IStatusWithData} from '../types';

export const returnResponse = <T>(
  response: IStatusWithData<IApiResponse>,
): IApiResponse<T> => {
  return {
    statusCode: response.data.statusCode,
    success: response.data.success ?? true,
    message: response.data.message,
    data: response.data.data,
  };
};

export const returnError = <T>(error: any): IApiResponse<T> => {
  const e: AxiosError<IApiResponse> = error;

  return {
    statusCode: e?.response?.status || e?.response?.data?.statusCode || 500,
    success: false,
    message:
      e?.response?.data?.message ?? 'An error occured, Please try again later',
    data: null,
  };
};
