import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  IconButton,
  Typography,
} from '@material-ui/core';

import {DotsHorizontalIcon} from '@iconicicons/react';
import React from 'react';
import clsx from 'clsx';

export interface FrontpageFeedItemProps extends CardProps {
  avatarSrc?: string;
  title?: string;
  handle?: string;
  description?: string;
}

/** A view component for information posted by the Entail team. */
export function FrontpageFeedItem(props: FrontpageFeedItemProps) {
  const {avatarSrc, title, handle, description, className, ...other} = props;

  return (
    <Card {...other} className={clsx(className, 'max-w-sm rounded-xl')}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} variant="rounded" />}
        action={
          <IconButton aria-label="settings">
            <DotsHorizontalIcon />
          </IconButton>
        }
        title={title}
        subheader={`@${handle}`}
      />
      <CardContent>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default FrontpageFeedItem;
