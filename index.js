var express = require('express');
var bodyParser = require('body-parser');
var fun_cloth = require('./clothes.js');
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
  fun_cloth('2017-10-08', '서울', 'male', function(info){
    res.json(info);
  });
});

app.listen(port, function () {
	console.log('Express 엔진이 port '+ port +'에서 실행중입니다.');
});
