import React, {useState} from 'react';
import {ILoadingProviderProps} from './interfaces';
import LoadingContext from './loadingContext';
import LoadingScreen from '../../components/template/LoadingScreen';
import {Keyboard} from 'react-native';

const LoadingProvider: ILoadingProviderProps = ({children}) => {
  const [loading, setLoading] = useState(false);
  const showLoader = () => {
    Keyboard.dismiss();
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={{showLoader, hideLoader}}>
      <LoadingScreen loading={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
