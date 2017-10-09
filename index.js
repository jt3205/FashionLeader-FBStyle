var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var port = 3242;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/clothes', function(req, res) {
  res.json(303, getClothes('2017-10-08', '서울', 'male'));
  res.render('clothes');
});

function getClothes(date, loaction, gender){
  var data = {
    date: date,
    loaction: location,
    gender: gender
  };
  request('http://www.fashionup.co.kr/api/clothes', data, function (error, response, body){
      return body;
  });
}

app.listen(port, function () {
	console.log('Express 엔진이 port '+ port +'에서 실행중입니다.');
});
