import ApiClient from '../configs/api.config';
import {IApiResponse, IStatusWithData} from '../types';
import {returnError, returnResponse} from '../utils/api.util';
import {RootApiRoutes} from '../constants/apiRoutes';
import {IHealthConditionsData} from '../types/responses/Root';

export class RootService {
  constructor() {}

  static async healthConditionsApi(): Promise<
    IApiResponse<IHealthConditionsData[]>
  > {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient()(RootApiRoutes.HEALTH_CONDITIONS);

      return returnResponse<IHealthConditionsData[]>(response);
    } catch (error: any) {
      return returnError(error);
    }
  }
}
