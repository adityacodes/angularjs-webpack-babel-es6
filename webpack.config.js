const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  	entry: './src/main.js',
  	devtool: 'inline-source-map',
  	devServer: {
		contentBase: './dist',
		historyApiFallback: true
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Angular Application',
			hash: true,
		    template: './src/index.html'
		}),
	    new MiniCssExtractPlugin({
	      filename: "[name].css",
	      chunkFilename: "[id].css"
	    })
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
	 rules: [
	   {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
       },
	   {
	     test: /\.css$/,
	     use: [MiniCssExtractPlugin.loader, "css-loader"]
	   },
	   {
	     test: /\.(png|svg|jpg|gif)$/,
	     use: [
	       'file-loader'
	     ]
	   },
	   {
	     test: /\.(woff|woff2|eot|ttf|otf)$/,
	     use: [
	       'file-loader'
	     ]
	   },
	   {
	   	test: /\.html$/,
      	use:{
      		loader: 'raw-loader'
      	} 
	   }
	 ]
	}
};