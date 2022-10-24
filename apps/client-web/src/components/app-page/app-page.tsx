import {Container, ContainerProps} from '@material-ui/core';

import React from 'react';

export type AppPageProps = Omit<ContainerProps, 'fixed' | 'component'>;

/**
 * A large, full-width view component to display a section of content.
 */
export function AppPage(props: AppPageProps) {
  return <Container component="main" fixed {...props} />;
}

export default AppPage;
