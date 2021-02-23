const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");

const BUILD_DIR = path.resolve(__dirname, './build');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const mode = process.env.NODE_ENV;
const devtool = IS_PRODUCTION ? false : 'inline-source-map';
const cssLoader = IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
	mode,
	devtool,
	entry: {
		index: './src/index.ts',
	},
	devServer: {
    port: 3035,
  },
	output: {
		publicPath: '/',
		path: BUILD_DIR,
		filename: 'static/[name].[hash:8].js',
	},
	resolve: {
		alias: {
			src:  path.resolve(__dirname, 'src'),
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	module: {
		rules: [
			{
				test: /\.(ts)x?$/,
				exclude: /node_modules/,
				use: {
						loader: 'babel-loader',
				},
			},
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !IS_PRODUCTION
						},
						emitCss: !IS_PRODUCTION,
						hotReload: !IS_PRODUCTION,
						preprocess: sveltePreprocess({})
					},
				},
			},
			{
				// required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					cssLoader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						}
					}
				]
			},
			{
				test: /\.(jpg|jpeg|png|svg)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name].[contenthash].[ext]',
						},
					}
				]
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin(
			{
				chunks: ['index'],
				template: path.resolve(__dirname, './public/index.html'),
				filename: './index.html',
				inject: true,
			},
		),
		new MiniCssExtractPlugin({
			filename: 'static/[name].[hash:8].css',
		}),
	]
};
