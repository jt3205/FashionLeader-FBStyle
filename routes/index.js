var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var request = require('request');

//Connection with MYSQL
var client = mysql.createConnection({
    host: 'gmsgondr.net',
    user: 'info3',
    password: '1234',
    database: 'info3'
});

router.get('/clothes', function (req, res) {
    getClothes('2017-10-15', '서울', 'male', function (info) {
        console.log(info);
        res.json(info);
    });
});

//  res.render('clothes',getClothes('2017-10-10', '서울', 'male'));
function getClothes(date, location, gender, callback) {
    var result = null;
    var data = {
        date: date,
        location: location,
        gender: gender
    };

    console.log(data);
    (function (result) {
        request({url: 'http://www.fashionup.co.kr/api/clothes?', qs: data}, function (error, response, body) {
            summary(body, function (weather, temp, clothes) {
                callback({weather: weather, temp: temp, clothes: clothes});
            });
        });
    }(result));
}

function summary(info, callback) {
    var weather;
    var temp = JSON.parse(info).weather.temperature;
    var clothes = JSON.parse(info).cloth;
    client.connect(function (err) {
        client.query('Select ko_weather from weather where en_weather = \''
            + JSON.parse(info).weather.weather[0].description + '\'', function (error, result, fields) {
            if (error) {
                console.log('[[ ------------ 에러남 ------------ ]]');
                console.log(error);
                console.log('[[ ------------ 에러남 ------------ ]]');
            }
            else {
                callback(result[0].ko_weather, temp, clothes);
            }
        });
    });
    return temp;
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Fashion Leader'
    });
});

module.exports = router;
