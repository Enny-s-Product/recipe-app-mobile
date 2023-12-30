import * as RNSInfo from 'react-native-sensitive-info';
import {STORE_NAME} from '../configs/store.config';
import {ErrorLogger} from './logger.util';

interface IStoredItem<T extends string | object> {
  key: string;
  data: T;
}

const options: RNSInfo.RNSensitiveInfoOptions = {
  keychainService: STORE_NAME,
  sharedPreferencesName: STORE_NAME,
};

export const storeSensitiveInfo = async <T extends string | object>({
  key,
  data,
}: IStoredItem<T>) => {
  const options: RNSInfo.RNSensitiveInfoOptions = {
    keychainService: STORE_NAME,
    sharedPreferencesName: STORE_NAME,
  };

  let stringData: string =
    typeof data === 'string' ? data : JSON.stringify(data);

  try {
    await RNSInfo.setItem(key, stringData, options);
    return Promise.resolve(null);
  } catch (error) {
    ErrorLogger(error as Error);
    return Promise.resolve(error);
  }
};

export const getSensitiveInfo = async <T extends string | object>(
  key: string,
): Promise<T | string> => {
  try {
    const data = await RNSInfo.getItem(key, options);
    return JSON.parse(data);
  } catch (error) {
    ErrorLogger(error as Error);
    return 'Error occured getting item';
  }
};

export const deleteSensitiveInfo = async (key: string) => {
  try {
    await RNSInfo.deleteItem(key, options);
    return null;
  } catch (error) {
    ErrorLogger(error as Error);
    return null;
  }
};
