'use strict';

const express = require('express');
const app = express();


app.use(express.json());

app.get('/food', (req, res) => {

  let food = req.query.food;

  res.send({
    food,
  });
});

module.exports = {
  app,
};
