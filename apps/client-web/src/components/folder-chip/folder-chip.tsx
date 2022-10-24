import {Chip, ChipProps} from '@material-ui/core';

import {FolderIcon} from '@iconicicons/react';
import React from 'react';

export type FolderChipProps = Omit<ChipProps, 'icon'>;

/**
 * A chip element with a entail yellow folder icon.
 */
export function FolderChip(props: FolderChipProps) {
  const {classes, ...other} = props;
  return (
    <Chip
      classes={{
        ...classes,
        root: 'bg-entail-buckets-dark text-entail-yellow-text',
        icon: 'text-entail-yellow-text',
      }}
      icon={<FolderIcon />}
      {...other}
    />
  );
}

export default FolderChip;
