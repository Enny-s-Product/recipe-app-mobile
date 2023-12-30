import {string, z} from 'zod';
import {useLoadingScreen} from '../../../providers/loadingProvider/loadingContext';
import {showToast} from '../../../utils/toast.util';
import {AuthService} from '../../../apis/AuthService';

export type LoginFormValues = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const LoginSchema = z.object({
    email: string().email({message: 'Please enter a valid email'}),
    password: string(),
  });

  const {showLoader, hideLoader} = useLoadingScreen();

  const onSubmit = async (data: LoginFormValues, callBack: () => void) => {
    // make api call
    showLoader();
    const response = await AuthService.loginApi({
      email: data.email.toLowerCase().trim(),
      password: data.password,
    });
    hideLoader();

    console.log('login response', response);

    if (response.statusCode === 200 && response.success) {
      callBack();
    } else {
      showToast('error', response?.message);
    }
  };

  return {LoginSchema, onSubmit};
};
