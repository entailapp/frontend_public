import {Chip, ChipProps} from '@material-ui/core';

import React from 'react';

export type PronounChipProps = Omit<ChipProps, 'size'>;

/**
 * A chip element with a low contrast.
 */
export function PronounChip(props: PronounChipProps) {
  const {classes, ...other} = props;

  return (
    <Chip
      classes={{
        ...classes,
        root: 'bg-entail-buckets-dark text-entail-text-secondary',
      }}
      size="small"
      {...other}
    />
  );
}

export default PronounChip;
