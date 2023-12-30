export interface IApiResponse<T = null> {
  statusCode: number;
  message: string;
  success: boolean;
  data: T | null;
}

export interface IStatusWithData<T> {
  status: number;
  data: T;
}

export interface ISelect {
  label: string;
  value: string;
}

export interface IUserDetails {
  accessToken: string;
}
