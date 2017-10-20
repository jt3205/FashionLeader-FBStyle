var express = require('express');
var WebpackDevServer = require('Webpack-dev-server');
var webpack = require('webpack');
var asdf = require('../src/App.js');

var app = express();
var port = 3000;
var devPort = 3001;

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    var config = require('../webpack.config.js');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', express.static(__dirname + '/../public'));
app.set('view engine', 'ejs');

app.get('/hello', (req, res) => {
    return res.send('Can you hear me?');
});

app.get('/index', function(req, res){
    return res.render('../public/views/index');
});

app.get('/test', function(req, res){
    return res.render('../public/views/test');
});

app.get('/asdf', function(req, res){
    return asdf.asdf();
});

var posts = require('./routes/posts')
app.use('/posts', posts);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
