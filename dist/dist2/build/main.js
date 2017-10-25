'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV === 'development') {
    console.log('Server is running on development mode');

    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', _express2.default.static(__dirname + '/../public'));
app.set('view engine', 'ejs');

app.get('/hello', function (req, res) {
    return res.send('Can you hear me?');
});

app.get('/index', function (req, res) {
    return res.render('../public/views/index');
});

app.use('/posts', _posts2.default);

var server = app.listen(port, function () {
    console.log('Express listening on port', port);
});
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', 'server/main.js');

    __REACT_HOT_LOADER__.register(port, 'port', 'server/main.js');

    __REACT_HOT_LOADER__.register(devPort, 'devPort', 'server/main.js');

    __REACT_HOT_LOADER__.register(server, 'server', 'server/main.js');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_express2, '_express2', 'build/main.js');

    __REACT_HOT_LOADER__.register(_webpackDevServer2, '_webpackDevServer2', 'build/main.js');

    __REACT_HOT_LOADER__.register(_webpack2, '_webpack2', 'build/main.js');

    __REACT_HOT_LOADER__.register(_posts2, '_posts2', 'build/main.js');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'build/main.js');

    __REACT_HOT_LOADER__.register(app, 'app', 'build/main.js');

    __REACT_HOT_LOADER__.register(port, 'port', 'build/main.js');

    __REACT_HOT_LOADER__.register(devPort, 'devPort', 'build/main.js');

    __REACT_HOT_LOADER__.register(compiler, 'compiler', 'build/main.js');

    __REACT_HOT_LOADER__.register(devServer, 'devServer', 'build/main.js');

    __REACT_HOT_LOADER__.register(server, 'server', 'build/main.js');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'build/main.js');
}();

;
//# sourceMappingURL=main.js.map

;

var _temp3 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_express2, '_express2', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(_webpackDevServer2, '_webpackDevServer2', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(_webpack2, '_webpack2', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(_posts2, '_posts2', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(app, 'app', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(port, 'port', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(devPort, 'devPort', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(compiler, 'compiler', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(devServer, 'devServer', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(server, 'server', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'dist2/build/main.js');

    __REACT_HOT_LOADER__.register(_temp2, '_temp2', 'dist2/build/main.js');
}();

;
//# sourceMappingURL=main.js.map