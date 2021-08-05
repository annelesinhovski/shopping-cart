module.exports = {
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.js$': './babel-jest.upward.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@shoppingcart)'],
  collectCoverageFrom: [
    'src/**/*.{js, jsx}',
    '!**/public/**',
    '!**/*.config.{js, jsx}',
    '!**/node_modules/**',
    '!**/out/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/__mocks__/**',
    '!**/__tests__/**',
  ],
};
