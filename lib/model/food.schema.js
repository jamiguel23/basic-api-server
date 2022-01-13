'use strict';



const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  food: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  protein: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
});

module.exports = Food;
