import React from 'react';
import {NextPage} from 'next';
import {SettingsPageLayout} from 'components';

/** */
export default function SecuritySettingsPage() {
  return <h2>Hello Security settings!</h2>;
}

// eslint-disable-next-line react/display-name
SecuritySettingsPage.getLayout = (page: NextPage) => (
  <SettingsPageLayout title="Security">{page}</SettingsPageLayout>
);
