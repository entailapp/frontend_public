import React from 'react';
import {Button, Container} from '@material-ui/core';
import {ArrowLeftIcon} from '@iconicicons/react';
import {AppBar, SettingsPageButton} from 'components';

export interface SettingsPageLayoutProps {
  title: string;
  children?: React.ReactNode;
}

/** */
export function SettingsPageLayout(props: SettingsPageLayoutProps) {
  return (
    <>
      <AppBar />
      <div className="h-16" />
      <Container className="p-0">
        <Button className="my-2 flex items-center normal-case">
          <ArrowLeftIcon />
          <p className="mx-1">Go Back</p>
        </Button>
        <div className="grid grid-cols-3 bg-entail-buckets-dark rounded-lg overflow-hidden shadow-md">
          <div className="grid-span-1">
            <h1 className="text-2xl font-bold p-4 border-b border-entail-text-secondary border-opacity-20">
              Settings
            </h1>
            <SettingsPageButton title="General" href="/settings/general" />
            <SettingsPageButton title="Account" href="/settings/account" />
            <SettingsPageButton
              title="Accessibility &amp; Display"
              href="/settings/accessibility"
            />
            <SettingsPageButton title="Security" href="/settings/security" />
            <SettingsPageButton
              title="Notifications"
              href="/settings/notifications"
            />
            <SettingsPageButton
              title="Information &amp; Resources"
              href="/settings/information"
            />
          </div>
          <div className="col-span-2 border-l border-entail-text-secondary border-opacity-20">
            <h1 className="text-2xl font-bold p-4 border-b border-entail-text-secondary border-opacity-20">
              {props.title}
            </h1>
            {props.children}
          </div>
        </div>
      </Container>
    </>
  );
}

export default SettingsPageLayout;
