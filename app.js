const express = require('express');
const cors = require('cors');

const routes = require('./routes/index');

const createApp = () => {
  const app = express();
  app.use(cors(), express.json(), routes);
  app.use(express.static('public'));

  return app;
};

module.exports = { createApp };