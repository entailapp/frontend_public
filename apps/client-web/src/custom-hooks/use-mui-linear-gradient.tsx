import {CardMediaProps} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';

export interface MuiLinearGradientProps {
  image?: CardMediaProps['image'];
  backgroundGradientTo?: string | number;
  backgroundGradientFrom?: string | number;
}

/** Creates a CSSProperties of a background image with a paper gradient. */
export function useMuiLinearGradient(
  params: MuiLinearGradientProps
): React.CSSProperties {
  const {
    image,
    backgroundGradientFrom = 0,
    backgroundGradientTo = '100%',
  } = params;

  const theme = useTheme();
  const paper = theme.palette.background.paper;

  const result: React.CSSProperties = {
    backgroundImage: `linear-gradient(to top, ${paper} ${backgroundGradientFrom}, transparent ${backgroundGradientTo}), url(${image})`,
  };

  return result;
}
