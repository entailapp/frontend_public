module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: ['src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': '<rootDir>/__mocks__/style-mock.ts',
  },
};
