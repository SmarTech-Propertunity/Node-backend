const { GraphQLList, GraphQLInt } = require('graphql');
const NotificationType = require('../types/notificationType');
const Notification = require('../models/notificationModel');

const notificationQueries = {
  allNotifications: {
    type: new GraphQLList(NotificationType),
    resolve: async () => {
      return await Notification.findAll();
    },
  },
  notificationById: {
    type: NotificationType,
    args: { id: { type: GraphQLInt } },
    resolve: async (_, { id }) => {
      return await Notification.findByPk(id);
    },
  },
};

module.exports = notificationQueries;