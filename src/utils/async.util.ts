import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Saves data to the async store
 * @param {string} key
 * @param {any} data
 * @return promise
 */
export const asyncStore = async function (
  key: string,
  value: string | object,
): Promise<void | false> {
  // stringify data if object
  const data = typeof value === 'string' ? value : JSON.stringify(value);

  return await AsyncStorage.setItem(key, data);
};

/**
 * Gets saved data from the async store
 * @param {string} key
 * @param {boolean} isObject pass this as true if your return value is supposed to be an object
 * @return promise
 */
export const asyncGet = async function <D>(
  key: string,
  isObject?: boolean,
): Promise<D | null> {
  // get data from the async storage
  const data: string | null = await AsyncStorage.getItem(key);

  // return nothing if the data was not found
  if (!data) {
    return Promise.resolve(null);
  }

  // parse data if isObject
  const returnData = isObject ? JSON.parse(data) : data;

  // return stored data
  return Promise.resolve(returnData);
};

/**
 * Removes saved data from the async store
 * @param {string} key
 * @return Promise
 */
export const asyncRemove = async function (key: string): Promise<void> {
  return await AsyncStorage.removeItem(key);
};
