import '../src/styles/global.scss';

import {StylesProvider, ThemeProvider} from '@material-ui/core/styles';

import {AccountsContext} from 'contexts';
import {AppModalsProvider} from 'components';
import {AppProps} from 'next/app';
import {CssBaseline} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import EntailTheme from '../src/styles/entail-mui-theme';
import Head from 'next/head';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import NProgress from 'nprogress';
import type {Page} from '../src/types/page';
import React from 'react';
import Router from 'next/router';
import {useMineAccounts} from '../src/custom-hooks/use-mine-accounts';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/**
 * The highest level component in the application.
 *
 * https://nextjs.org/docs/advanced-features/custom-app.
 */
function CustomApp({
  Component,
  pageProps,
}: AppProps & {
  Component: Page;
}) {
  /**
   * As a temporary development tool, you can mock the user
   * sign in using true or false.
   */
  const accountsContextState = useMineAccounts(false);

  // Check to see if the page we are rendering wants to have its own layout.
  // If so, we will provide it.
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" type="image/svg+xml" href="/entail-logo.svg" />
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={EntailTheme}>
          <CssBaseline />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <AccountsContext.Provider value={accountsContextState}>
              <AppModalsProvider>
                {getLayout(<Component {...pageProps} />)}
              </AppModalsProvider>
            </AccountsContext.Provider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default CustomApp;
