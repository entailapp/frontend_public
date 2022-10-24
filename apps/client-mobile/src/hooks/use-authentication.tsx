import AuthenticationContext from '../contexts/authentication-context';
import React from 'react';

export type AuthenticationProviderProps = {
  children: React.ReactNode;
};

export function AuthenticationProvider(props: AuthenticationProviderProps) {
  // TODO: Proper authentication with some sort of mock backend.
  // TODO: Fetch authentication token from local store.

  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  // Memoize the authentication state, to only re-render when isLoggedIn changes.
  const memo = React.useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
    }),
    [isLoggedIn]
  );

  return (
    <AuthenticationContext.Provider value={memo}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

/**
 * Hook which provides access to the authentication context.
 */
export default function useAuthentication() {
  const context = React.useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      'useAuthentication must be used from within an AuthenticationProvider'
    );
  }
  return context;
}
