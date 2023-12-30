import Axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {API_URL} from './app.config';
import {ApiErrorLogger, ErrorLogger} from '../utils/logger.util';
import NetInfo from '@react-native-community/netinfo';
import {AnyAction, EnhancedStore, ThunkMiddleware} from '@reduxjs/toolkit';
import {IAuthInitialState} from '../slices/authSlice';

let store: EnhancedStore<
  {
    auth: IAuthInitialState;
  },
  AnyAction,
  [
    ThunkMiddleware<
      {
        auth: IAuthInitialState;
      },
      AnyAction,
      undefined
    >,
  ]
>;

export const injectStore = (
  _store: EnhancedStore<
    {
      auth: IAuthInitialState;
    },
    AnyAction,
    [
      ThunkMiddleware<
        {
          auth: IAuthInitialState;
        },
        AnyAction,
        undefined
      >,
    ]
  >,
) => {
  store = _store;
};
export class ApiClient {
  private static client: AxiosInstance;

  private constructor() {}

  static initialize() {
    this.client = Axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      // You can add other axios configurations here
    });

    // Attach access token to each request if available
    this.client.interceptors.request.use(
      config => {
        // attach auth token to headers
        const token = store.getState().auth?.userDetails?.accessToken
          ? store.getState().auth?.userDetails?.accessToken
          : '';
        config.headers.Authorization = `Bearer ${token}`;

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        let message = error.message;
        try {
          ApiErrorLogger(error);
          if (/network error|429/i.test(message)) {
            const netinfo = await NetInfo.fetch();
            const isConnected = !!(
              netinfo.isConnected && netinfo.isInternetReachable
            );
            message = isConnected
              ? 'Whoops, something went wrong, please try again in a moment.'
              : "No internet connection, please ensure you're connected to the internet and try again.";
          }
        } catch (e) {
          ErrorLogger(e as Error);
        } finally {
          return Promise.reject({...error, message});
        }
      },
    );
  }

  static getClient(): AxiosInstance {
    if (!this.client) {
      this.initialize();
    }
    return this.client;
  }

  static addHeaders(headers: Record<string, string>): void {
    this.getClient().defaults.headers = {
      ...this.getClient().defaults.headers,
      ...headers,
    };
  }
}

export default ApiClient;
