require('./config');
require('./config-database');
const express = require('express');
const apiV1Router = require('./api/v1');

exports.createApp = (baseUrl) => {

  const app = express();

  app.use(baseUrl + '/api/v1', apiV1Router);

  return app;
}
