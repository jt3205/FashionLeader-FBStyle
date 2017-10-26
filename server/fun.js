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
            contents = contents +
                `<div class="card">
                    <img src="${cloth.image}" alt="product">
                        <div class="info">
                            <div class="title">
                                ${cloth.title}
                            </div>
                            <br>
                                종류:${cloth.sort}<br>
                                가격:${cloth.lprice}원
                        </div>
                </div>`;
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
    callback(weather, temp, clothes);
}

// module.exports = update();