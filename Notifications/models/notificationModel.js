const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const Notification = sequelize.define(
  'notifications',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false }, // property, account, agent_response, etc.
    message: { type: DataTypes.TEXT, allowNull: false },
    link: { type: DataTypes.STRING, allowNull: true },
    isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  {
    timestamps: false,
    tableName: 'notifications',
  }
);

module.exports = Notification;