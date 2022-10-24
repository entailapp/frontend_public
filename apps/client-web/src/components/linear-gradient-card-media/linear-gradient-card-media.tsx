import {CardMedia, CardMediaProps} from '@material-ui/core';
import {
  MuiLinearGradientProps,
  useMuiLinearGradient,
} from 'src/custom-hooks/use-mui-linear-gradient';

import React from 'react';

export type LinearGradientCardMediaProps = CardMediaProps &
  MuiLinearGradientProps;

/** A card component with a paper gradient image background. */
export function LinearGradientCardMedia(props: LinearGradientCardMediaProps) {
  const linearGradientStyle = useMuiLinearGradient(props);
  const {image, ...other} = props;

  return <CardMedia {...other} image={image} style={linearGradientStyle} />;
}

export default LinearGradientCardMedia;
