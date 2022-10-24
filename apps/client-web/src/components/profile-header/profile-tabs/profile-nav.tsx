import {
  BookIcon,
  GridMasonryIcon,
  HeartIcon,
  HomeIcon,
} from '@iconicicons/react';
import {Paper, PaperProps, Tabs} from '@material-ui/core';
import {
  ProfileNavTab,
  ProfileNavTabProps,
} from './profile-nav-tab/profile-nav-tab';

import React from 'react';
import {useRouter} from 'next/router';

export type ProfileNavProps = PaperProps;

interface ProfileNavTabShort {
  label: ProfileNavTabProps['label'];
  icon: ProfileNavTabProps['icon'];
  href: string;
}

const tabs: ProfileNavTabShort[] = [
  {
    label: 'about',
    icon: <BookIcon />,
    href: '/profile/about',
  },
  {
    label: 'collections',
    icon: <GridMasonryIcon />,
    href: '/profile/collections',
  },
  {
    label: 'feed',
    icon: <HomeIcon />,
    href: '/profile/feed',
  },
  {
    label: 'interactions',
    icon: <HeartIcon />,
    href: '/profile/interactions',
  },
];

/** The nav bar for the profile page. */
export function ProfileNav(props: ProfileNavProps) {
  const router = useRouter();
  const tabValue: number = tabs.findIndex(v => v.href === router.asPath);

  return (
    <Paper square elevation={0} component="nav" {...props}>
      <Tabs
        value={tabValue}
        variant="scrollable"
        indicatorColor="primary"
        textColor="primary"
        scrollButtons="on"
        classes={{
          root: 'justify-center',
          scroller: 'flex-grow-0',
        }}
      >
        {tabs.map(item => (
          <ProfileNavTab
            key={item.href}
            label={item.label}
            icon={item.icon}
            onClick={() => router.push(item.href)}
          />
        ))}
      </Tabs>
    </Paper>
  );
}

export default ProfileNav;
