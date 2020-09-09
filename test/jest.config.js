module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: [
      "js",
  ],
  testRegex: '(/unit/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  testPathIgnorePatterns: ["dist"],
  rootDir: '../'
};
