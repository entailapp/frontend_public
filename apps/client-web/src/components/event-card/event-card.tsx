import {Card, CardProps} from '@material-ui/core';
import {
  LinearGradientCardMedia,
  LinearGradientCardMediaProps,
} from '../linear-gradient-card-media/linear-gradient-card-media';

import React from 'react';

export interface EventCardProps extends CardProps {
  image?: LinearGradientCardMediaProps['image'];
  title?: string;
  location?: string;
  subheading?: string;
}

/**
 * An EventCard is used to advertise specific conventions or events.
 */
export function EventCard(props: EventCardProps) {
  const {image, title, location, subheading, ...other} = props;

  return (
    <Card {...other}>
      <LinearGradientCardMedia
        image={image}
        className="h-full rounded-inherit"
        backgroundGradientFrom="25%"
      >
        <div className="h-full flex p-2.5">
          <div className="mt-auto leading-tight text-entail-text-dark">
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{location}</p>
            <p className="text-entail-text-secondary">{subheading}</p>
          </div>
        </div>
      </LinearGradientCardMedia>
    </Card>
  );
}

export default EventCard;
