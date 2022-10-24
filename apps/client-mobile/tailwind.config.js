module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Utility colors.
      transparent: 'transparent',
      current: 'currentColor',

      // Standard colors.
      red: '#ef5d60',
      yellow: '#fed766',
      'dark-yellow': '#d5a725',
      orange: '#ed7f40',
      blue: '#189fb7',
      green: '#14aC37',
      indigo: '#6073ff',
      violet: '#a864ff',
      pink: '#ef66ca',

      // Greyscale.
      white: '#eff1f3',
      grey: '#696773',
      black: '#1c1c1f',

      // Dark mode UI colors.
      'main-text-dark': '#eff1f3',
      'card-dark': '#2c2a31',
      'base-dark': '#1c1c1f',
      'bucket-dark': '#0b0b0d',

      // Light mode UI colors.
      'main-text-light': '#2c2a31',
      'card-light': '#eff1f3',
      'base-light': '#dfdfe0',
      'bucket-light': '#d1d1d2',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
