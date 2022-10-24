const plugins = [
  [
    // https://github.com/vercel/next.js/issues/9607
    'babel-plugin-transform-imports',
    {
      '@material-ui/core': {
        transform: '@material-ui/core/${member}',
        // transform: '@material-ui/core/esm/${member}',
        preventFullImport: true,
      },
      /** @todo icon library */
    },
  ],
];

module.exports = {
  presets: ['next/babel'],
  plugins: plugins,
};
