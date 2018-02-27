 var path = require('path');
 var webpack = require('webpack');
 /*var HTMLWebpackPlugin = require('html-webpack-plugin');
 var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '
 });*/
     
 module.exports = {
     entry: './app/index.jsx',
     module: {
         rules: [
             {
                 test: /\.(js|jsx)$/,
		 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     devServer: {
        inline: false,
        contentBase: "./build",
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };

