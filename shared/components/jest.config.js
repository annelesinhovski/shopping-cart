module.exports = {
  transform: {
    '^.+\\.js$': './babel-jest.upward.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@shoppingcart)'],
  collectCoverageFrom: ['src/**/*.{js, jsx}'],
  testEnvironment: 'jsdom',
};
