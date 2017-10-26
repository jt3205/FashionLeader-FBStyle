var request = require('request');

function update(gender, location, date) {
    console.log('asdf');
}

function getContents(gender, location, date) {

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
        request({url: 'http://www.fashionup.co.kr/api/clothes?', qs: data}, function (error, response, body) {
            summary(body, function (weather, temp, clothes) {
                callback({weather: weather, temp: temp, clothes: clothes});
            });
        });
    }(result));
}

function summary(info, callback) {
    var weather = JSON.parse(info).weather.weather[0].description;
    var temp = JSON.parse(info).weather.temperature;
    var clothes = JSON.parse(info).cloth;
    callback(result[0].ko_weather, temp, clothes);
}