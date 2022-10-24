import {AppBar, AppPage, ProfileHeader} from 'components';

import React from 'react';

/** The feed page. */
export function ProfileFeed() {
  return (
    <>
      <AppBar />
      <ProfileHeader />

      <AppPage>Collections</AppPage>
    </>
  );
}

export default ProfileFeed;
