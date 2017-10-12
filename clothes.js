var mysql = require('mysql');
var request = require('request');
var mysql = require('mysql');

var client = mysql.createConnection({
	host : 'gmsgondr.net',
	user:'info3',
	password:'1234',
	database:'info3'
});

//  res.render('clothes',getClothes('2017-10-10', '서울', 'male'));
module.exports = function(date, location, gender, callback){
  var result = null;
  var data = {
    date: date,
    location: location,
    gender: gender
  };
  (function(result){
    request({url:'http://www.fashionup.co.kr/api/clothes?', qs:data}, function (error, response, body){
      summary(body, function(weather, temp, clothes){
        callback({weather:weather, temp:temp, clothes:clothes});
      });
    });
  }(result));
};

function summary(info, callback) {
  var weather;
  info = JSON.parse(info);
  var temp = info.weather.temperature;
  var clothes = info.cloth;
  client.connect(function (err) {
    //API에서 날씨가 다 영어로 나와서 번역
  	client.query('Select ko_weather from weather where en_weather = \''+info.weather.weather[0].description+'\'', function (error, result, fields) {
  		if(error){
  			console.log('[[ ------------ 에러남 ------------ ]]');
  			console.log(error);
  			console.log('[[ ------------ 에러남 ------------ ]]');
  		}
  		else {
        console.log("callback");
        callback(result[0].ko_weather, temp, clothes);
  		}
  	});
  });
}
