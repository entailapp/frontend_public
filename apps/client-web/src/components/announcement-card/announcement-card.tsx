import {Card, CardProps, Chip} from '@material-ui/core';
import {
  LinearGradientCardMedia,
  LinearGradientCardMediaProps,
} from '../linear-gradient-card-media/linear-gradient-card-media';

import React from 'react';

export interface AnnouncementCardProps extends CardProps {
  image?: LinearGradientCardMediaProps['image'];
  title?: string;
  tags?: string[];
}

/**
 * An AnnouncementCard is used to advertise specific articles of interest, and
 * will likely link to some other content for further reading.
 */
export function AnnouncementCard(props: AnnouncementCardProps) {
  const {image, title, tags = [], ...other} = props;

  return (
    <Card {...other}>
      <LinearGradientCardMedia
        image={image}
        className="h-full rounded-inherit"
        backgroundGradientFrom="30%"
      >
        <div className="h-full flex p-2.5">
          <div className="mt-auto leading-tight text-entail-text-dark">
            <p className="font-semibold">{title}</p>
            <p className="text-entail-text-secondary mb-1">
              (Click to read more)
            </p>
            <div>
              {tags.map(tag => (
                <Chip size="small" key={tag} label={tag} className="mr-1" />
              ))}
            </div>
          </div>
        </div>
      </LinearGradientCardMedia>
    </Card>
  );
}

export default AnnouncementCard;
