import {AppModalsEnum} from 'components';
import React from 'react';

export interface AppModalsContextType {
  value?: AppModalsEnum;
  setValue: (value?: AppModalsEnum) => void;
}

const AppModalsContext = React.createContext<AppModalsContextType>({
  setValue: console.log,
});

export {AppModalsContext};
