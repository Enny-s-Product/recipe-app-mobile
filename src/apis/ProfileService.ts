import ApiClient from '../configs/api.config';
import {IApiResponse, IStatusWithData} from '../types';
import {returnError, returnResponse} from '../utils/api.util';
import {ProfileApiRoutes} from '../constants/apiRoutes';
import {IProfileIngridientsData} from '../types/responses/Profile';

export class ProfileService {
  constructor() {}

  static async profileIngridientsApi(): Promise<
    IApiResponse<IProfileIngridientsData[]>
  > {
    try {
      const response: Awaited<IStatusWithData<IApiResponse>> =
        await ApiClient.getClient()(ProfileApiRoutes.PROFILE_INGRIDIENTS);

      return returnResponse<IProfileIngridientsData[]>(response);
    } catch (error: any) {
      return returnError(error);
    }
  }
}
