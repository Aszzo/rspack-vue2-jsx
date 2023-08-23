const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		main: "./src/main.js"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	devtool: false,
	plugins: [new VueLoaderPlugin()],
	resolve: {
		extensions: ['.js', '.vue', '.json', '.wasm'],
		alias: {
			vue$: 'vue/dist/vue.runtime.esm.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(js|jsx)$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@vue/babel-preset-jsx']
					}
				}],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: ["vue-style-loader", "css-loader", "less-loader"],
				type: "javascript/auto"
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"],
				type: "javascript/auto"
			},
			{
				test: /\.svg$/,
				type: "asset/resource"
			}
		]
	}
};
module.exports = config;
