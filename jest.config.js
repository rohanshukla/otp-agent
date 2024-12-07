module.exports = {
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts", "**/src/**/*.test.js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts}"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
