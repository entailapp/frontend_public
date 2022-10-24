import React from 'react';
import {NextPage} from 'next';
import {SettingsPageLayout} from 'components';

/** */
export default function AccountSettingsPage() {
  return <h2>Hello account settings!</h2>;
}

// eslint-disable-next-line react/display-name
AccountSettingsPage.getLayout = (page: NextPage) => (
  <SettingsPageLayout title="Account">{page}</SettingsPageLayout>
);
