import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Typography,
} from '@material-ui/core';
import {
  LinearGradientCardMedia,
  LinearGradientCardMediaProps,
} from '../linear-gradient-card-media/linear-gradient-card-media';

import React from 'react';

export interface ProfileSuggestionCardProps extends CardProps {
  image?: LinearGradientCardMediaProps['image'];
  username?: string;
  profileHandle?: string;
  mutualCount?: number;
  avatar?: string;
  onFollow?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * A ProfileSuggestionCard displays a username, handle, banner and amount of
 * mutuals who are following this user.
 * NOTE: The blur effect on the "Follow" button is not supported on Firefox
 * (backdrop-filter backdrop-blur-sm).
 */
export function ProfileSuggestionCard(props: ProfileSuggestionCardProps) {
  const {
    image,
    username,
    profileHandle,
    mutualCount,
    avatar,
    onFollow,
    ...other
  } = props;

  return (
    <Card {...other}>
      <LinearGradientCardMedia
        image={image}
        className="h-full rounded-inherit"
        backgroundGradientFrom="30%"
      >
        <CardHeader
          classes={{
            root: 'pb-0',
            action: 'm-0',
          }}
          avatar={
            <Avatar className="w-16 h-16" variant="rounded" src={avatar} />
          }
          action={
            <Button
              className="rounded-xl text-base font-semibold bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm normal-case py-0.5 px-3"
              onClick={onFollow}
            >
              + Follow
            </Button>
          }
        />
        <CardContent className="pt-2">
          <Typography variant="h5" component="div" className="font-bold">
            {username}
          </Typography>
          <Typography component="div" className="text-entail-yellow-text">
            @{profileHandle}
          </Typography>
          <Typography component="div" className="text-entail-text-secondary">
            Followed by {mutualCount} mutuals
          </Typography>
        </CardContent>
      </LinearGradientCardMedia>
    </Card>
  );
}

export default ProfileSuggestionCard;
