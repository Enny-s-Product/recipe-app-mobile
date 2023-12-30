import {AuthService} from './../../../apis/AuthService';
import {string, z} from 'zod';
import {useLoadingScreen} from '../../../providers/loadingProvider/loadingContext';
import {showToast} from '../../../utils/toast.util';

export type GetStartedFormValues = {
  email: string;
  password: string;
  firstName: string;
};

export const useGetStarted = () => {
  const GetStartedSchema = z.object({
    email: string().email({message: 'Please enter a valid email'}),
    password: string().min(8, {
      message: 'Password must be atleast 8 characters',
    }),
    firstName: string(),
  });

  const {showLoader, hideLoader} = useLoadingScreen();

  const onSubmit = async (data: GetStartedFormValues, callBack: () => void) => {
    // make api call
    showLoader();
    const response = await AuthService.onboardingOtpApi({
      email: data.email.toLowerCase().trim(),
      firstName: data.firstName,
    });
    hideLoader();

    console.log('get started response', response);

    if (response.statusCode === 200 && response.success) {
      callBack();
    } else {
      showToast('error', response?.message);
    }
  };

  return {GetStartedSchema, onSubmit};
};
