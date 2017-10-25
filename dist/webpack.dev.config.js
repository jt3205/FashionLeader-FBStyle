'use strict';

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
    entry: ['./src/index.js', 'webpack-dev-server/client?http://0.0.0.0:3001', 'webpack/hot/only-dev-server', "react-hot-loader/patch"],
    // target: "node",
    // target: 'web',
    output: {
        path: '/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "**": "http://localhost:3000"
        }
    },
    devtool: 'sourcemap',
    plugins: [new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), new webpack.NoEmitOnErrorsPlugin(), new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })],

    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
                plugins: ["react-hot-loader/babel"]
            }
        }]
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;
//# sourceMappingURL=webpack.dev.config.js.map