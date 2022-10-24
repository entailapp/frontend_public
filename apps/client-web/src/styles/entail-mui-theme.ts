import {createTheme} from '@material-ui/core/styles';
import tailwind from '../../tailwind.config';

const re = /(\d+)px/;

const MuiSwitchColorOverrides = {
  color: tailwind.theme.extend.colors['entail-text-secondary'],
  '&$checked': {
    color: tailwind.theme.extend.colors['entail-base-light'],
  },
  '&$checked + .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: tailwind.theme.extend.colors['entail-yellow'],
  },
};

// https://material-ui.com/customization/default-theme/
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {main: tailwind.theme.extend.colors['entail-yellow']},
    secondary: {main: tailwind.theme.extend.colors['entail-red']},

    background: {
      default: tailwind.theme.extend.colors['entail-base-dark'],
      paper: tailwind.theme.extend.colors['entail-text-light'],
    },
  },

  typography: {
    fontFamily: tailwind.theme.fontFamily.sans.join(','),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: parseInt(tailwind.theme.screens.sm.match(re)[1]),
      md: parseInt(tailwind.theme.screens.md.match(re)[1]),
      lg: parseInt(tailwind.theme.screens.lg.match(re)[1]),
      xl: parseInt(tailwind.theme.screens.xl.match(re)[1]),
    },
  },

  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 10,
      },
    },

    /** @todo Update to include other API parts. */
    MuiChip: {
      sizeSmall: {height: '1.25rem'},
    },

    /** There is only one color variation for the Switch component in Entail. */
    MuiSwitch: {
      track: {
        opacity: 1.0,
        backgroundColor: tailwind.theme.extend.colors['entail-text-light'],
      },
      switchBase: MuiSwitchColorOverrides,
      colorPrimary: MuiSwitchColorOverrides,
      colorSecondary: MuiSwitchColorOverrides,
    },
  },
});

export default theme;
