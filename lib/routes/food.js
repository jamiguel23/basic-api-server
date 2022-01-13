'use strict';

const express = require('express');
const {FoodModel} = require('../model');
const router = express.Router();

//Routes
router.get('/food', getFood);
router.post('/food', createFood);


// Handlers
async function getFood(req, res) {

  // let food = req.query.food;
  let foods = await FoodModel.findAll();

  let resObject = {
    count: foods.length,
    results: foods,
  };
  res.status(200).json(resObject);
}

function createFood (req, res) {


}


module.exports = router;
