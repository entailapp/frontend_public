import React from 'react';
import {NextPage} from 'next';
import {SettingsPageLayout} from 'components';

/** */
export default function NotificationsSettingsPage() {
  return <h2>Hello notification settings!</h2>;
}

// eslint-disable-next-line react/display-name
NotificationsSettingsPage.getLayout = (page: NextPage) => (
  <SettingsPageLayout title="Notifications">{page}</SettingsPageLayout>
);
