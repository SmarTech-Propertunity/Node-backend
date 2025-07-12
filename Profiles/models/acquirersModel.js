const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const Acquirer = sequelize.define(
  'acquirers',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    preferences: { type: DataTypes.JSON, allowNull: true }, // filters, saved searches
    creditEvaluation: { type: DataTypes.JSON, allowNull: true },
    contactHistory: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: true } // agent IDs
  },
  {
    timestamps: false,
    tableName: 'acquirers',
  }
);

module.exports = Acquirer;