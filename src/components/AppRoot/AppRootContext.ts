import * as React from 'react';

export interface AppRootContextInterface {
  appRoot?: React.RefObject<HTMLDivElement>;
  portalRoot?: HTMLDivElement;
  embedded?: boolean;
  mode?: 'partial' | 'embedded' | 'full';
}

export const AppRootContext = React.createContext<AppRootContextInterface>({
  portalRoot: null,
});
