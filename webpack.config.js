var path = require('path');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './lib',
        filename: 'app.bundle.js',
        publicPath: '/lib/'
    },
    resolve: {
        root: [path.resolve('./src')]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        inline: true
    },
    plugins: [new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })]
};
