'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var router = _express2.default.Router();

router.get('/', function (req, res) {
    res.send('posts');
});

router.get('/read/:id', function (req, res) {
    res.send('You are reading post ' + req.params.id);
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(router, 'router', 'server/routes/posts.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'server/routes/posts.js');
}();

;
//# sourceMappingURL=posts.js.map

;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_express2, '_express2', 'dist2/server/routes/posts.js');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'dist2/server/routes/posts.js');

    __REACT_HOT_LOADER__.register(router, 'router', 'dist2/server/routes/posts.js');

    __REACT_HOT_LOADER__.register(_default, '_default', 'dist2/server/routes/posts.js');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'dist2/server/routes/posts.js');
}();

;
//# sourceMappingURL=posts.js.map