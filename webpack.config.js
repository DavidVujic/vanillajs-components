/*global process, __dirname */
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

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
    contentBase: path.resolve(__dirname, './'),
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








/*

var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'app.bundle.js',
    publicPath: '/lib/'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  devServer: {
    inline: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
*/
