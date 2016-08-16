if (!process.env.NODE_ENV) require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

module.exports = function () {
  app.set('port', process.env.PORT || 3000);
  app.use(express.static(path.resolve(__dirname, '../../client/dist/')));
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === 'development') {
    app.use(require('morgan')('dev'));
  }

  return app;
};
