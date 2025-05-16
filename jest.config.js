module.exports = {
    testEnvironment: 'jsdom', // For frontend testing
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.(t|j)sx?$': 'babel-jest', // If using Babel
    },
  };