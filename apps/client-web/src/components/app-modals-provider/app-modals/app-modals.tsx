import {AppModalsContext} from 'src/contexts/app-modals-context';
import {CreateAccountDialog} from '../../create-account-dialog/create-account-dialog';
import React from 'react';
import {SignInDialog} from '../../sign-in-dialog/sign-in-dialog';

export enum AppModalsEnum {
  SignIn,
  CreateAccount,
}

type AppModalsOpenType = {
  [K in AppModalsEnum]?: boolean;
};

/**
 * Provider for all modals which can be considered 'global'.
 *
 * A global modal is one which can be opened from arbitrary locations in the app.
 * For example, the sign in dialog might appear when an unauthenticated user attempts
 * to view a post, rather than redirecting to a log in page, the sign up modal could
 * appear at this point.
 *
 * An example of a modal which is NOT global and should not be present here is a
 * confirmation dialog for deleting a post, which is local to the particular operation
 * which it is performing.
 */
export function AppModals() {
  const {value, setValue} = React.useContext(AppModalsContext);
  const [open, setOpen] = React.useState<AppModalsOpenType>({});

  React.useEffect(() => {
    const nextState: AppModalsOpenType = {};

    if (value !== undefined) {
      nextState[value] = true;
    }

    setOpen(nextState);
  }, [value]);

  /** Callback fired when the component requests to be closed. */
  function onClose() {
    setValue(undefined);
  }

  return (
    <>
      <SignInDialog
        open={open[AppModalsEnum.SignIn] ?? false}
        onClose={onClose}
      />
      <CreateAccountDialog
        open={open[AppModalsEnum.CreateAccount] ?? false}
        onClose={onClose}
      />
    </>
  );
}

export default AppModals;
