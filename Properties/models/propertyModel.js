const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const Property = sequelize.define(
  'properties',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    dimensions: { type: DataTypes.STRING, allowNull: true },
    rooms: { type: DataTypes.INTEGER, allowNull: true },
    features: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    agentId: { type: DataTypes.INTEGER, allowNull: false },
    metrics: { type: DataTypes.JSON, allowNull: true }, // { views, clicks, contactRequests }
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true }
  },
  {
    timestamps: false,
    tableName: 'properties',
  }
);

module.exports = Property;