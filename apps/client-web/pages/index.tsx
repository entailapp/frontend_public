import {AppBar, AppModalsEnum, FrontPageFeed} from 'components';
import {Box, Button, Grid, Toolbar} from '@material-ui/core';

import {AppModalsContext} from 'contexts';
import React from 'react';
import styles from './index.module.scss';

/** The home or landing page of the application. */
export function Index() {
  const {setValue: setAppModal} = React.useContext(AppModalsContext);

  return (
    <div className={styles.pageBackground}>
      <AppBar />
      <Toolbar />
      <main className="p-8">
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          spacing={5}
        >
          <Grid item className="w-full max-w-lg">
            <Box fontSize={64} fontWeight={800}>
              What are furries talking about?
            </Box>
            <Box fontSize={24} fontWeight={500}>
              Entail is where furry conversation is kicking off, they’re buying
              + trading awesome items, and finding new events and meets near
              them.
            </Box>
            <Box className="text-black" fontSize={24} fontWeight={500}>
              You in?
            </Box>
            <div className="space-x-3">
              <Button
                variant="contained"
                className="bg-entail-base-dark text-entail-text-dark"
              >
                <Box
                  fontSize={30}
                  fontWeight={800}
                  onClick={() => setAppModal(AppModalsEnum.CreateAccount)}
                >
                  sign up
                </Box>
              </Button>
              <Button variant="contained">
                <Box fontSize={30}>get the app</Box>
              </Button>
            </div>
          </Grid>

          <Grid item className="w-full max-w-md">
            <FrontPageFeed />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Index;
