export default {
  testEnvironment: 'node',
  moduleFileExtensions: ['mjs', 'js', 'json', 'node'],
  transform: {
    '^.+\\.mjs$': 'babel-jest' 
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.mjs$': '$1' 
  },
  // Updated testMatch to include your test file
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '**/*.test.mjs' // Explicitly include *.test.mjs files anywhere
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,mjs}', '!src/**/*.test.{js,mjs}'],
  collectCoverage: true,
  coverageProvider: 'v8',
  testTimeout: 5000
};
