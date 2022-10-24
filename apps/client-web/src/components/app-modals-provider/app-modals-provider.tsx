import {AppModals, AppModalsEnum} from './app-modals/app-modals';

import {AppModalsContext} from 'contexts';
import React from 'react';

export interface AppModalsProviderProps {
  children?: React.ReactNode;
}

/**
 * A higher order component for the modal provider context.
 */
export function AppModalsProvider(props: AppModalsProviderProps) {
  const {children} = props;

  const [singleGlobalModal, setSingleGlobalModal] =
    React.useState<AppModalsEnum>();

  return (
    <AppModalsContext.Provider
      value={{
        value: singleGlobalModal,
        setValue: setSingleGlobalModal,
      }}
    >
      {children}
      <AppModals />
    </AppModalsContext.Provider>
  );
}

export {AppModalsEnum};
export default AppModalsProvider;
