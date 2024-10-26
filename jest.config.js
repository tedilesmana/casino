module.exports = {
  preset: "ts-jest", // Use ts-jest preset for TypeScript support
  testEnvironment: "jsdom", // Use jsdom as the test environment for testing React components
  testMatch: [
    "**/src/__tests__/**/*.(spec|test).[jt]s?(x)", // Match test files in src/__tests__ directory
  ],
  setupFilesAfterEnv: ["./src/setupTests.ts"], // Specify setup file
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock styles imports
  },
  collectCoverage: true, // Enable coverage collection
  coverageReporters: ["html", "text"], // Coverage report formats
};
