const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Plant extends Model {};

// Model definition
Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customName: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: `A custom name for your plant outside the standardized name, e.g., Audrey`,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: `How the plant was acquired, e.g., seed, cutting, gift, etc.`,
    },
    dateStarted: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: `The data on which the plant was started, e.g., when seed planted, when cutting propagated, etc.`,
    },
    startingMethod: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: `How the plant was started, e.g., indoor start, direct sown, propagation, etc.`,
    },
    dateTransplanted: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: `Most recent date on which the plant was transplanted from one container to another`,
    },
    stillAlive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: `Whether or not the plant is still alive`,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: `Any general notes specific to this plant`,
    },
  },
  {
    sequelize,
    modelName: 'plant',
    freezeTableName: true,
  }
);

module.exports = Plant;