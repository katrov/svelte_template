const fs = require('fs');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

module.exports = (flag) => {
	const COPY_ENV_FILE = `.env.${flag ? 'production' : 'development'}`;
	let env = {};
	if (fs.existsSync(COPY_ENV_FILE)) {
		env = dotenvExpand(
			dotenv.config({
				path: COPY_ENV_FILE,
			}),
		).parsed;
	}
	return Object.keys(env).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(env[next]);
		return prev;
	}, {});
};
