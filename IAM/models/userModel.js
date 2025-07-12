const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'users',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    civilStatus: { type: DataTypes.STRING, allowNull: true },
    profilePhoto: { type: DataTypes.STRING, allowNull: true },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'buyer' }, // buyer, agent, admin
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  {
    timestamps: false,
    tableName: 'users',
  }
);

module.exports = User;