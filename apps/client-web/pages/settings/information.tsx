import React from 'react';
import {NextPage} from 'next';
import {SettingsPageLayout} from 'components';

/** */
export default function InformationSettingsPage() {
  return <h2>Hello information settings!</h2>;
}

// eslint-disable-next-line react/display-name
InformationSettingsPage.getLayout = (page: NextPage) => (
  <SettingsPageLayout title="Information &amp; Resources">
    {page}
  </SettingsPageLayout>
);
