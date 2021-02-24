module.exports = {
  presets: [
		[
			"@babel/preset-env",
			{
				"debug": false,
				"targets": { 
					"esmodules": true,
					"node": "current"
				}
			}
		],
		"@babel/preset-typescript"
	],
  plugins: []
};
