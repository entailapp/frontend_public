import React from 'react';
import {NextPage} from 'next';
import {SettingsPageLayout} from 'components';

/** */
export default function AccessibilitySettingsPage() {
  return <h2>Hello accessibility settings!</h2>;
}

// eslint-disable-next-line react/display-name
AccessibilitySettingsPage.getLayout = (page: NextPage) => (
  <SettingsPageLayout title="Accessibility &amp; Display">
    {page}
  </SettingsPageLayout>
);
