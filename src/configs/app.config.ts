/**
 * Application environment, this tells the application what environment it is
 * running in.
 * @var string
 */
export const APP_ENV: 'production' | 'staging' = __DEV__
  ? 'staging'
  : 'production';

/**
 * API Base URL
 * @var string
 */

export const API_URL = {
  production: 'https://recipemyway-root-19c12adf86d7.herokuapp.com/',
  staging: 'https://recipemyway-root-19c12adf86d7.herokuapp.com/',
}[APP_ENV];
