'use strict';

// var mysql = require('mysql');
// var express = require('express');

function update(gender, location, date) {
    console.log('asdf');
}

function getContents(gender, location, date) {}

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
    var weather;
    var temp = JSON.parse(info).weather.temperature;
    var clothes = JSON.parse(info).cloth;
    client.connect(function (err) {
        client.query('Select ko_weather from weather where en_weather = \'' + JSON.parse(info).weather.weather[0].description + '\'', function (error, result, fields) {
            if (error) {
                console.log('[[ ------------ 에러남 ------------ ]]');
                console.log(error);
                console.log('[[ ------------ 에러남 ------------ ]]');
            } else {
                callback(result[0].ko_weather, temp, clothes);
            }
        });
    });
    return temp;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(update, 'update', 'src/process.js');

    __REACT_HOT_LOADER__.register(getContents, 'getContents', 'src/process.js');

    __REACT_HOT_LOADER__.register(getClothes, 'getClothes', 'src/process.js');

    __REACT_HOT_LOADER__.register(summary, 'summary', 'src/process.js');
}();

;
//# sourceMappingURL=process.js.map