import {createContext, useContext} from 'react';
import {ILoadingContext} from './interfaces';

/**
 * Provides access to auth state across the entire app.
 * @var object
 */
const LoadingContext = createContext<ILoadingContext>({
  showLoader: () => {},
  hideLoader: () => {},
});

/**
 * Access auth context view react hooks.
 * @returns object
 */
export function useLoadingScreen() {
  const context = useContext(LoadingContext);
  return context;
}

// export AuthContext as modules default
export default LoadingContext;
