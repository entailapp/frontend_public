import React from 'react';

const AuthenticationContext = React.createContext<
  | {
      isLoggedIn: boolean;
      setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export default AuthenticationContext;
