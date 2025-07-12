const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const Agent = sequelize.define(
  'agents',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true },
    whatsapp: { type: DataTypes.STRING, allowNull: true },
    address: { type: DataTypes.STRING, allowNull: true },
    schedule: { type: DataTypes.STRING, allowNull: true },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
    reviews: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: true },
    salesHistory: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: true }, // property IDs
    responseSpeed: { type: DataTypes.FLOAT, defaultValue: 0 }
  },
  {
    timestamps: false,
    tableName: 'agents',
  }
);

module.exports = Agent;