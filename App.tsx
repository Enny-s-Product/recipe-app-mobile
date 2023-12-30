import React from 'react';
import 'react-native-gesture-handler';
import AppNavigationContainer from './src/navigators/AppNavigationContainer';
import ThemeProvider from './src/providers/themeProvider/ThemeProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoadingProvider from './src/providers/loadingProvider/LoadingProvider';
import {ToastProvider} from './src/providers/ToastProvider/ToastProvider';
import ConfigProvider from './src/providers/configProvider/ConfigProvider';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {injectStore} from './src/configs/api.config';

// Inject redux store
injectStore(store);

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ConfigProvider>
          <Provider store={store}>
            <LoadingProvider>
              <AppNavigationContainer />
              <ToastProvider />
            </LoadingProvider>
          </Provider>
        </ConfigProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
