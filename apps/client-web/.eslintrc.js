module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', '../../.eslintrc.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
