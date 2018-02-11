const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const PORT = 3010
function resolve(relatedPath){
	return path.join(__dirname, relatedPath)
}
const webpackConfigDev = {
	plugin: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			IS_DEVELOPMENT: true,
		}),
		new OpenBrowserPlugin({
			url: `http://localhost:$(PORT)/#/login`,
		})
	],
	devtool: 'source-map',
	devServer: {
		contentBase: resolve('../app'),
		historyApiFallack: false,
		hot: true,
		inline: true,
		host: '0.0.0.0',
		port: PORT,
	},
}
