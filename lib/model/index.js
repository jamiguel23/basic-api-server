'use strict';

require('dotenv').config;
const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';




// connection string: postgresql://localhost:5432/food
let db = new Sequelize(POSTGRES_URI);
const foodSchema = require('./food.schema.js');
const pokemonSchema = require('./pokemon.schema.js');

const FoodModel = foodSchema(db, DataTypes);
const PokemonModel = pokemonSchema(db, DataTypes);

module.exports = {
  db,
  FoodModel,
  PokemonModel,
};

