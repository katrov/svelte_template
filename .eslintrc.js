module.exports = {
	extends: [
		"airbnb-typescript",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
	plugins: [
		"@typescript-eslint",
		"unused-imports",
	],
	rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-boolean-cast": "off",
    "@typescript-eslint/indent": [2, "tab"],
    "@typescript-eslint/camelcase": "off",
		"no-tabs": 0,
		"import/no-extraneous-dependencies": [
			"error",
			{
				"devDependencies": [
          '**/__tests__*.js',
          '**/__tests__*.jsx',
          '**/__tests__*.ts',
          '**/__tests__*.tsx',
          'src/__tests__/**/*',
				]
			}
		]
	},
	settings: {
		react: {
			version: "latest"
		}
	},
	env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  }
};
