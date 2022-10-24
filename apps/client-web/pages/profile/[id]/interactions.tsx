import {AppBar, AppPage, ProfileHeader} from 'components';

import React from 'react';

/** The interactions page. */
export function ProfileInteractions() {
  return (
    <>
      <AppBar />
      <ProfileHeader />

      <AppPage>Collections</AppPage>
    </>
  );
}

export default ProfileInteractions;
