module.exports = {
  projects: ['<rootDir>/projects/*', '<rootDir>/shared/*'],
  collectCoverageFrom: [
    '!**/public/**',
    '!**/*config.{js, jsx}',
    '!**/node_modules/**',
    '!**/out/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    '!**/__snapshots__/**',
    '!**/*.json',
  ],
};
