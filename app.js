const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const httpProxy = require('http-proxy');

const url = 'http://spa.tglrw.com:4000';

const options = {
  changeOrigin: true,
  target: {
    https: true
  }
};

httpProxy.createServer(443, url, options).listen(8001);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/client'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(process.env.PORT || 3000);
