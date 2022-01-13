'use strict';

const express =require('express');
const {PokemonModel} = require('../model');
const router = express.Router();

//Routes
router.get('/pokemon', getPokemon);
router.get('/pokemon/:id', getPokemon);
router.post('/pokemon', createPokemon);
router.put('/pokemon/:id', updatePokemon);
router.delete('/pokemon/:id', deletePokemon);


//Handlers

async function getPokemon(req, res){
  let { id } = req.params;
  let pokemon;
  if (id) {
    pokemon = await PokemonModel.findOne({where: {id}});
    res.status(200).json(pokemon);
  } else {
    pokemon = await PokemonModel.findAll();
    res.status(200).json(pokemon);
  }
}

// async function getOnePokemon(req, res) {
//   const id = +(req.body.id);
//   console.log(id);
//   let pokemon = await PokemonModel.findOne({results: {id: id}});
//   res.status(200).json(pokemon);
// }


async function createPokemon(req, res) {

  let pokemonData= req.body;
  let pokemon = await PokemonModel.create(pokemonData);
  res.status(200).json(pokemon);

}

async function updatePokemon(req, res) {
  let { id } = req.params;
  const pokemonData = req.body;
  let pokemon = await PokemonModel.findOne({where: {id}});
  let updatedPokemon = await pokemon.update(pokemonData);
  res.status(200).json(updatedPokemon);
}

async function deletePokemon(req, res) {
  let { id } = req.params;
  let deletedPokemon = await PokemonModel.destroy({where: {id}});
  res.status(200).json(deletedPokemon);
}

module.exports = router;
