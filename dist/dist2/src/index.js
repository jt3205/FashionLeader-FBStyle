'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var path = document.getElementById('root');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), path);

if (module.hot) {
    module.hot.accept();
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(path, 'path', 'src/index.js');
}();

;
//# sourceMappingURL=index.js.map

;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_react2, '_react2', 'dist2/src/index.js');

    __REACT_HOT_LOADER__.register(_reactDom2, '_reactDom2', 'dist2/src/index.js');

    __REACT_HOT_LOADER__.register(_App2, '_App2', 'dist2/src/index.js');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'dist2/src/index.js');

    __REACT_HOT_LOADER__.register(path, 'path', 'dist2/src/index.js');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'dist2/src/index.js');
}();

;
//# sourceMappingURL=index.js.map