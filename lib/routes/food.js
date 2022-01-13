'use strict';

const express = require('express');
const router = express.Router();

router.get('/food', getFood);

function getFood(req, res) {

  let food = req.query.food;

  res.status(200).send({
    food,
  });
}


module.exports = router;
