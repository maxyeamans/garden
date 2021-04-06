const sequelize = require('../config/connection');
const {Model, DataTypes, STRING} = require('sequelize');

class Planter extends Model{};

Planter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: `General name for the planter, e.g., South raised bed, Large terra cotta pot, etc.`,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: `The type of planter, e.g., raised bed, grow bag, etc.`,
    }
  },
  {
    sequelize,
    modelName: 'planter',
    freezeTableName: true,
  }
)

module.exports = Planter;