'use strict';

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var net = require('net');
var tls = require('tls');

module.exports = {
    // 가장 처음 읽을 스크립트파일
    // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
    entry: './src/index.js',
    // target: 'node',
    // 파일을 합치고 ./public/bundle.js 에 저장한다.
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    // ES6 문법과 JSX 문법을 사용한다
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
//# sourceMappingURL=webpack.config.js.map