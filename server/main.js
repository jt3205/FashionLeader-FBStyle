import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
var fun = require('./fun');

const app = express();
const port = 3000;
const devPort = 3001;


if (process.env.NODE_ENV === 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
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

app.get('/index', function (req, res) {
    return res.render('../public/views/index');
});

app.get('/test', function (req, res) {
    return res.render('../public/views/test');
});

app.get('/request', function (req, res) {
    var contents = fun.fun('female', '남한산성', '2017-10-27', function (data) {
        console.log(data);
        return res.send(data);
    });
});

import posts from './routes/posts';

app.use('/posts', posts);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});

