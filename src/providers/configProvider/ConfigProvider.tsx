import React, {useContext, useEffect, useState} from 'react';
import {
  IConfigContext,
  IConfigProviderProps,
  NavState,
  OnboardingState,
} from './interfaces';
import {asyncGet, asyncStore} from '../../utils/async.util';
import {STORE_KEYS} from '../../configs/store.config';
// import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform} from 'react-native';
// import {getDeviceName} from 'react-native-device-info';
// import {setPushNotifications} from '../../apis/notifications/setPush.api';
// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';

export const ConfigContext = React.createContext<IConfigContext>({
  isReady: false,
  completeReady: () => {},
  checkReady: () => Promise.resolve(false),
  navState: 'onboarding',
  handleNavState: () => {},
  onBoardingState: 'login',
  handleOnboardingState: () => {},
  notificationToken: null,
});

export const useConfig = () => {
  const context = useContext(ConfigContext);
  return context;
};

const ConfigProvider: IConfigProviderProps = ({children}) => {
  const [isReady, setIsReady] = useState(false);
  const [navState, setNavState] = useState<'onboarding' | 'dashboard'>(
    'onboarding',
  );
  const [onBoardingState, setOnBoardingState] =
    useState<OnboardingState>('login');
  const [notificationToken, setNotificationToken] = useState<null | string>(
    null,
  );

  const completeReady = async () => {
    // persist new ready
    await asyncStore(STORE_KEYS.IS_READY, 'true');
    console.log('completed ready function called');
    // update state
    setIsReady(true);
  };

  const checkReady = async () => {
    const isReady = await asyncGet(STORE_KEYS.IS_READY);
    console.log('check ready', isReady);
    // no need to select theme if alternate theme is not set
    return isReady === 'true' ? true : false;
  };

  const checkNavState = async () => {
    const navState: NavState | null = await asyncGet(STORE_KEYS.NAV_STATE);
    console.log('check ready', isReady);
    // no need to select theme if alternate theme is not set
    if (navState && navState === 'dashboard') {
      setNavState('dashboard');
      return;
    }
    setNavState('onboarding');
  };

  const handleNavState = async (state: NavState) => {
    // persist nav state
    await asyncStore(STORE_KEYS.NAV_STATE, state);
    // update state
    setNavState(state);
  };

  const handleOnboardingState = (state: OnboardingState) => {
    setOnBoardingState(state);
  };

  // const handlePushNotifications = async () => {
  //   if (notificationToken === null) return;
  //   const deviceName = await getDeviceName();
  //   const response = await setPushNotifications({
  //     device_name: deviceName,
  //     notification_token: notificationToken,
  //     userType: USER_TYPE,
  //   });

  //   console.log('response set push', response)

  //   if (response.success) {
  //     return;
  //   } else {
  //     // showToast('error', response.message);
  //   }
  // };

  // const handleNotificationTokenIOS = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (!enabled) return;

  //   // console.log('Authorization status:', authStatus);
  //   // const apnsToken = await messaging().getAPNSToken();
  //   // console.log('apns token', apnsToken);

  //   // I dont want to get the token for ios in dev environment
  //   const token = __DEV__ ? null : await messaging().getToken();
  //   console.log('token in get get permissions ios', token);
  //   setNotificationToken(token ? token : '');
  // };

  // const handleNotificationTokenAndroid = async () => {
  //   PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  //   );
  //   console.log('function called and getting token');
  //   const token = await messaging().getToken();
  //   console.log('token from get notification token android', token);
  //   setNotificationToken(token ? token : '');
  // };

  // Set up for push notifications with firebase for android
  useEffect(() => {
    // if (isReady) {
    //   Platform.OS === 'android'
    //     ? handleNotificationTokenAndroid()
    //     : handleNotificationTokenIOS();
    //   messaging().setBackgroundMessageHandler(async remoteMessage => {
    //     console.log('Message handled in the background!', remoteMessage);
    //   });
    // }
    // return () => {
    //   messaging().onMessage(async remoteMessage => {
    //     if (Platform.OS === 'android') {
    //       PushNotification.createChannel(
    //         {
    //           channelId: '1',
    //           channelName: 'name',
    //         },
    //         created => console.log(`createChannel returned '${created}'`),
    //       );
    //       PushNotification.localNotification({
    //         title: remoteMessage?.notification?.title ?? '',
    //         message: remoteMessage?.notification?.body ?? '',
    //         channelId: '1',
    //       });
    //     } else if (Platform.OS === 'ios') {
    //       PushNotificationIOS.addNotificationRequest({
    //         id: '1',
    //         title: remoteMessage?.notification?.title ?? '',
    //         body: remoteMessage?.notification?.body ?? '',
    //       });
    //     }
    //     console.log(
    //       'A new FCM message arrived!',
    //       JSON.stringify(remoteMessage),
    //     );
    //   });
    // };
  }, [isReady]);

  useEffect(() => {
    // if (isReady && notificationToken && navState === 'dashboard') {
    //   handlePushNotifications();
    // }
  }, [notificationToken, isReady, navState]);

  useEffect(() => {
    checkNavState();
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        isReady,
        completeReady,
        checkReady,
        navState,
        handleNavState,
        onBoardingState,
        handleOnboardingState,
        notificationToken,
      }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
