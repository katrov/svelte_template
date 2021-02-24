module.exports = {
	testMatch: ['**/*.(test|spec).js'],
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "<rootDir>/jest.transform.js"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
