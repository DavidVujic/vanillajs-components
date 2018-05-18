/* global process, __dirname */
const path = require('path');
require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './src/main.js',
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './')
  },
  devtool: isProduction ? '' : 'source-map',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
};

module.exports = config;
