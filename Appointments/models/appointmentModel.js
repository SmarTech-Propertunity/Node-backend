const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const Appointment = sequelize.define(
  'appointments',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    agentId: { type: DataTypes.INTEGER, allowNull: false },
    acquireId: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    propertyId: { type: DataTypes.INTEGER, allowNull: false },
    place: { type: DataTypes.STRING, allowNull: false }
  },
  {
    timestamps: false,
    tableName: 'appointments',
  }
);

module.exports = Appointment;
