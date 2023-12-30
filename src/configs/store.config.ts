import {APP_ENV} from './app.config';

/**
 * Async store name, this is prefixed to all async store keys.
 * @var string
 */
export const STORE_NAME =
  '@RECIPEMYWAY' + (APP_ENV === 'production' ? '' : APP_ENV);

/**
 * List of available async store keys
 */
export const STORE_KEYS = {
  AUTHENTICATED: STORE_NAME + '@AUTHENTICATED',
  USER: STORE_NAME + '@USER',
  THEME: STORE_NAME + '@THEME',
  USER_DETAILS: STORE_NAME + '@USER_DETAILS',
  IS_READY: STORE_NAME + '@IS_READY',
  NAV_STATE: STORE_NAME + '@NAV_STATE',
};
