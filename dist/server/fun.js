'use strict';

var request = require('request');

exports.fun = function update(gender, location, date, callback) {
    var nowShowing = '';
    getContents(gender, location, date, function (data) {
        nowShowing += data;
        callback(nowShowing);
    });
};

function getContents(gender, location, date, callback) {
    getClothes(date, location, gender, function (data) {
        var contents = '';
        for (var i = 0; i < 5; i++) {
            var cloth = data.clothes[i];
            contents = contents + ('<div class="card">\n                    <img src="' + cloth.image + '" alt="product">\n                        <div class="info">\n                            <div class="title">\n                                ' + cloth.title + '\n                            </div>\n                            <br>\n                                \uC885\uB958:' + cloth.sort + '<br>\n                                \uAC00\uACA9:' + cloth.lprice + '\uC6D0\n                        </div>\n                </div>');
        }
        callback(contents);
    });
}

//Connection with MYSQL
// var client = mysql.createConnection({
//     host: 'gmsgondr.net',
//     user: 'info3',
//     password: '1234',
//     database: 'info3'
// });

function getClothes(date, location, gender, callback) {
    var result = null;
    var data = {
        date: date,
        location: location,
        gender: gender
    };

    console.log(data);
    (function (result) {
        request({ url: 'http://www.fashionup.co.kr/api/clothes?', qs: data }, function (error, response, body) {
            summary(body, function (weather, temp, clothes) {
                callback({ weather: weather, temp: temp, clothes: clothes });
            });
        });
    })(result);
}

function summary(info, callback) {
    var weather = JSON.parse(info).weather.weather[0].description;
    var temp = JSON.parse(info).weather.temperature;
    var clothes = JSON.parse(info).cloth;
    callback(weather, temp, clothes);
}

// module.exports = update();

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getContents, 'getContents', 'server/fun.js');

    __REACT_HOT_LOADER__.register(getClothes, 'getClothes', 'server/fun.js');

    __REACT_HOT_LOADER__.register(summary, 'summary', 'server/fun.js');
}();

;
//# sourceMappingURL=fun.js.map