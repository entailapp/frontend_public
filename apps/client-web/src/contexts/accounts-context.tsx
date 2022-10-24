import {ApplicationUser} from '@entail/api-client';
import React from 'react';

export interface AccountsContextType {
  accounts: ApplicationUser[];
  retryFetch?: () => void;
}

const AccountsContext = React.createContext<AccountsContextType>({
  accounts: [],
});

export {AccountsContext};
