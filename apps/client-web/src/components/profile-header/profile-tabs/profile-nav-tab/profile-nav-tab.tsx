import {Tab, TabProps} from '@material-ui/core';

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    flexDirection: 'row',
  },
  labelIcon: {
    '& .MuiTab-wrapper > *:first-child': {
      marginBottom: 0,
      marginRight: 6,
    },
  },
});

export type ProfileNavTabProps = Omit<TabProps, 'classes'>;

/** A tab component styled to have its label and icon horizontally aligned. */
export function ProfileNavTab(props: TabProps) {
  const classes = useStyles();

  return (
    <Tab
      classes={{
        ...props.classes,
        wrapper: classes.wrapper,
        labelIcon: classes.labelIcon,
      }}
      {...props}
    />
  );
}

export default ProfileNavTab;
