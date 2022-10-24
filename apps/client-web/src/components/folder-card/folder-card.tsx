import {Card, CardProps} from '@material-ui/core';
import {
  LinearGradientCardMedia,
  LinearGradientCardMediaProps,
} from '../linear-gradient-card-media/linear-gradient-card-media';

import React from 'react';

export interface FolderCardProps extends CardProps {
  image?: LinearGradientCardMediaProps['image'];
  title?: string;
  itemCount?: number;
}

/**
 * A FolderCard displays a preview of the folder, as well as its title and amount
 * of contained items.
 */
export function FolderCard(props: FolderCardProps) {
  const {image, title, itemCount, ...other} = props;

  return (
    <Card {...other}>
      <LinearGradientCardMedia
        image={image}
        className="h-full rounded-inherit"
        backgroundGradientFrom="15%"
      >
        <div className="h-full flex p-2.5 items-end">
          <div className="leading-tight">
            <h1 className="text-entail-text-dark text-xl font-bold">{title}</h1>
            <p className="text-entail-text-secondary">{itemCount} items</p>
          </div>
        </div>
      </LinearGradientCardMedia>
    </Card>
  );
}

export default FolderCard;
