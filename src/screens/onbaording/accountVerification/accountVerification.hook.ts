import {AuthService} from './../../../apis/AuthService';
import {useState} from 'react';
import {useLoadingScreen} from '../../../providers/loadingProvider/loadingContext';
import {showToast} from '../../../utils/toast.util';
import {ISignupRequest} from '../../../types/requests/Auth';

export const useAccountVerification = () => {
  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds
  const [expireCountdown, setExpireCountdown] = useState(300); // 2 minutes in seconds

  const {showLoader, hideLoader} = useLoadingScreen();

  const onSubmit = async (data: ISignupRequest, callBack: () => void) => {
    // make api call
    showLoader();
    const response = await AuthService.signupApi(data);
    hideLoader();

    console.log('login response', response);

    if (response.statusCode === 200 && response.success) {
      callBack();
    } else {
      showToast('error', response?.message);
    }
  };

  return {
    countdown,
    setCountdown,
    expireCountdown,
    setExpireCountdown,
    onSubmit,
  };
};
