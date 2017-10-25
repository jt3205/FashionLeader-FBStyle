'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import process from './process'

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('h2', null);
        }
    }]);

    return App;
}(_react2.default.Component);

var _default = App;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', 'src/App.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/App.js');
}();

;
//# sourceMappingURL=App.js.map

;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_createClass, "_createClass", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(_react2, "_react2", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(_inherits, "_inherits", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(App, "App", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(_default, "_default", "dist2/src/App.js");

    __REACT_HOT_LOADER__.register(_temp, "_temp", "dist2/src/App.js");
}();

;
//# sourceMappingURL=App.js.map