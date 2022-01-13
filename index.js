'use strict';

const server = require('./lib/server.js');
// const { start } = require('./lib/server.js');
const { db } = require('./lib/model/index.js');
const PORT = process.env.PORT || 3000;
// require('dotenv').config();


db.sync()
  .then(() => server.start(PORT))
  .catch(err => console.log(err));
// server.start(process.env.PORT || 3000);
