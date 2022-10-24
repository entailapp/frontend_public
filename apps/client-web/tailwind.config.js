/* eslint-disable node/no-unpublished-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // https://purgecss.com/guides/next.html
  // https://tailwindcss.com/docs/optimizing-for-production
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: ['html', 'body'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    screens: defaultTheme.screens,
    extend: {
      colors: {
        'entail-red': '#EF5D60',
        'entail-orange': '#ED7F40',
        'entail-yellow': '#FED766',
        'entail-yellow-text': '#D5A725',
        'entail-green': '#14AC37',
        'entail-blue': '#189FB7',
        'entail-indigo': '#6073FF',
        'entail-violet': '#A864FF',
        'entail-pink': '#EF66CA',

        'entail-text-dark': '#EFF1F3',
        'entail-cards-dark': '#2C2A31',
        'entail-base-dark': '#1C1C1F',
        'entail-buckets-dark': '#0B0B0D',

        'entail-text-light': '#2C2A31',
        'entail-cards-light': '#EFF1F3',
        'entail-base-light': '#DFDFE0',
        'entail-buckets-light': '#D1D1D2',

        'entail-text-secondary': '#696773',
      },
      backgroundImage: {
        'banner-shade':
          'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(44, 42, 49, 1) 100%)',
      },
      height: {
        banner: '480px',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      padding: ['first', 'last'],
    },
  },
};
