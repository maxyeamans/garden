const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Seed extends Model {};

// Model definition
Seed.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: `Common name for the plant, e.g., "Fresno Pepper", "Thai Basil", etc.`
    },
    scientificName: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: `Scientific name for the plant, if provided`,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: `Company or person who provided the seed, if known`
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
      comment: `URL to a page containing information about the seed`
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: `The year that the seed was intended to be used for`
    },
    plantType: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: `General type of plant, e.g., pepper, tomato, herb, etc.`
    },
    initialQuantity: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: `The initial quantity of seeds, either in count or weight`
    },
    currentQuantity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [ ['Full','Almost full','Halfway', 'Almost gone','None left'] ],
      },
      comment: `The current quantity of seeds remaining relative to the initial quantity`
    },
    startMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: `How the seed should be started. Options should be limited to indoor start, outdoor start, and direct sow.`
    },
    growingHabit: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: `For plants with different grow habits, e.g., bush vs. vining, determinate vs. indeterminate, etc.`
    },
    germinationTime: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: `Approximately how long it should take for the seed to germinate`
    },
    maturityTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: `Approximately how long it should take for the plant to reach full size and/or produce fruit/veggies`
    },
    additionalInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: `Any additional info that would be worthwhile to keep track of`
    },
  },
  {
    sequelize,
    modelName: 'seed',
    freezeTableName: true,
  }
);

module.exports = Seed;