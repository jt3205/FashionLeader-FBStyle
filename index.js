var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var async = require('async');
var sleep = require('sleep');

var app = express();
var port = 3242;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.render('index');
});
app.get('/clothes', function(req, res) {
  var clothes = null;
  console.log(0);
  async.waterfall([
    function(callback){
      clothes = getClothes('2017-10-10', '서울', 'male');
      callback(clothes);
    },
    function(){
      console.log(clothes);
      res.send(clothes);
    }
  ]);
});

//  res.render('clothes',getClothes('2017-10-10', '서울', 'male'));
function getClothes(date, location, gender){
  var data = {
    date: date,
    location: location,
    gender: gender
  };
  request('http://www.fashionup.co.kr/api/clothes', data, function (error, response, body){
    return body;
  });
}

app.listen(port, function () {
	console.log('Express 엔진이 port '+ port +'에서 실행중입니다.');
});
