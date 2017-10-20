var React = require('react');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var request = require('request');

class App extends React.Component {
    render() {
        return ("<div><h1>This is HOT!</h1></div>");
    }
}
function asdf(){
  console.log('asdf');
}
/*
<div class="card">
  <img src="/images/KakaoTalk_2017-10-12-10-42-35_Photo_9.jpeg" alt="product">
  <div class="info">
    <div class="title">
      무지루즈핏셔츠
    </div>
    <br>
    종류:셔츠<br>
    가격:21000원
  </div>
</div>
<div class="card">
  <img src="/images/KakaoTalk_2017-10-12-10-42-32_Photo_98.jpeg" alt="product">
  <div class="info">
    <div class="title">
      title
    </div>
    <br>
    종류<br>
    가격<br>
  </div>
</div>
*/
function update(gender, location, date) {
  console.log('asdf');
}

function getContents(gender, location, date){

}

//Connection with MYSQL
var client = mysql.createConnection({
    host: 'gmsgondr.net',
    user: 'info3',
    password: '1234',
    database: 'info3'
});

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
        client.query('Select ko_weather from weather where en_weather = \'' + JSON.parse(info).weather.weather[0].description + '\'', function (error, result, fields) {
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

module.exports = App;
