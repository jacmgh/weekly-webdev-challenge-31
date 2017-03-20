var webpack = require('webpack');
var path = require('path');
var PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'scripts.min.js',
        path: path.resolve(__dirname, 'dist', 'js')
    },
    devtool: !PROD ? 'cheap-eval-source-map' : '',
    plugins: PROD ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ] : []
};
