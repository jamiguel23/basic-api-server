'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const logger = require('./middleware/logger.js');
const mainRoute = require('./routes/main.js');
const foodRoute = require('./routes/food.js');
// const validator = require('./middleware/validator.js');
const app = express();


app.use(express.json());
app.use(logger);

//routes
app.use(mainRoute);
app.use(foodRoute);

//error handlers
app.use(serverError);
app.use(notFound);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running on:' + port);
    });
  },
  app,
};

