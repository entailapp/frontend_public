import {Paper} from '@material-ui/core';
import {ProfileNav} from './profile-tabs/profile-nav';
import React from 'react';
import clsx from 'clsx';
import styles from './profile-header.module.scss';

/** The component on the profile page which contains the navigation menu and the profile banner. */
export function ProfileHeader() {
  return (
    <Paper
      square
      className={clsx(styles.profileHeader, 'h-banner flex flex-col-reverse')}
    >
      <ProfileNav />
    </Paper>
  );
}

export default ProfileHeader;
