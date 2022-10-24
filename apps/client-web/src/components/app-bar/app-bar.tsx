import {AccountsContext, AppModalsContext} from 'contexts';
import {
  Avatar,
  Button,
  Container,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
} from '@material-ui/core';
import {BellIcon, PlusIcon, UserIcon} from '@iconicicons/react';

import {AppModalsEnum} from '../app-modals-provider/app-modals-provider';
import React from 'react';

/** The main header component for the entail application. */
export function AppBar() {
  const {setValue: setAppModal} = React.useContext(AppModalsContext);
  const accountsContextState = React.useContext(AccountsContext);
  const isLoggedIn = !!accountsContextState.accounts.length;

  return (
    <MuiAppBar className="bg-black bg-opacity-50">
      <Container fixed>
        <Toolbar>
          {isLoggedIn ? (
            <>
              <div className="flex-grow flex justify-center">
                <IconButton color="inherit">
                  <img
                    src="/entail-logo.svg"
                    width="30"
                    height="34"
                    className="fill-current text-entail-yellow"
                  />
                </IconButton>
              </div>

              <IconButton color="inherit">
                <PlusIcon />
              </IconButton>
              <IconButton color="inherit">
                <BellIcon />
              </IconButton>
              <Button color="inherit">
                <Avatar variant="square">
                  <UserIcon />
                </Avatar>
              </Button>
            </>
          ) : (
            <>
              <div className="flex-grow flex justify-center">
                <img
                  src="/static/entail-logo-typography.svg"
                  width="115"
                  height="33"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  className="bg-entail-cards-dark text-entail-text-dark"
                  variant="contained"
                  disableElevation
                  onClick={() => setAppModal(AppModalsEnum.SignIn)}
                >
                  log in
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  disableElevation
                  onClick={() => setAppModal(AppModalsEnum.CreateAccount)}
                >
                  sign up
                </Button>
              </div>
            </>
          )}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
