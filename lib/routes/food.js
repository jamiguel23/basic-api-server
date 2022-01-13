'use strict';

const express = require('express');
const {FoodModel} = require('../model');
const router = express.Router();

//Routes
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
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

async function getOneFood(req, res) {
  const id = +(req.params.id);
  console.log(id);
  let food = await FoodModel.findOne({results: {id: id}});
  res.status(200).json(food);
}

async function createFood(req, res) {

  let foodData= req.body;
  let food = await FoodModel.create(foodData);
  res.status(200).json(food);

}


module.exports = router;
