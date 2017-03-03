
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

// local css modules
loaders.push({
	test: /\.css$/,
	exclude: ['node_modules'],
	loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' })
});

// local scss modules
loaders.push({
	test: /\.scss$/,
	exclude: ['node_modules'],
	loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader' })
});
// global css files
loaders.push({
	test: /\.css$/,
	include: ['node_modules'],
	loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
});

module.exports = {
	entry: [
		'./src/index.tsx'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[chunkhash].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		// new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin({ 
			filename: '[contenthash].css', 
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			title: 'Webpack App'
		}),
		// new webpack.optimize.DedupePlugin()
	]
};
