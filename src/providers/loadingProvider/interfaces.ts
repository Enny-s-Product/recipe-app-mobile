import {ReactNode} from 'react';

export interface ILoadingContext {
  showLoader: () => void;
  hideLoader: () => void;
}

export type ILoadingProviderProps = React.FC<{
  children?: ReactNode;
}>;
