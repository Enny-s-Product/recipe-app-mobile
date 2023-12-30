import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#4CAF50',
        backgroundColor: '#4CAF50',
        zIndex: 999,
      }}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 14,
        fontFamily: 'Gilory-Semibold',
        color: '#FFF',
      }}
      text2Style={{
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Gilory-Regular',
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#CD5C5C',
        backgroundColor: '#CD5C5C',
        alignItems: 'center',
      }}
      text1Style={{
        fontSize: 14,
        fontFamily: 'Gilory-Semibold',
        color: '#FFF',
      }}
      text2Style={{
        fontSize: 10,
        fontFamily: 'Gilory-Semibold',
        color: '#FFF',
      }}
    />
  ),
};

export function ToastProvider(props: any) {
  return <Toast config={toastConfig} />;
}
