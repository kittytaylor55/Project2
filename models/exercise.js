const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
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
    },
    description: {
      type: DataTypes.STRING,
    },

    has_interval: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_repetitions: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    intensity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    equipment_required: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
  }
);

module.exports = Exercise;
