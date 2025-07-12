
const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } = require('graphql');
const Notification = require('../models/notificationModel');
const NotificationType = require('../types/notificationType');

const notificationMutations = {
  createNotification: {
    type: NotificationType,
    args: {
      userId: { type: new GraphQLNonNull(GraphQLInt) },
      type: { type: new GraphQLNonNull(GraphQLString) },
      message: { type: new GraphQLNonNull(GraphQLString) },
      link: { type: GraphQLString },
      isRead: { type: GraphQLBoolean }
    },
    resolve: (_, args) => Notification.create(args),
  },
  updateNotification: {
    type: NotificationType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      type: { type: GraphQLString },
      message: { type: GraphQLString },
      link: { type: GraphQLString },
      isRead: { type: GraphQLBoolean }
    },
    resolve: async (_, { id, ...args }) => {
      const [rowsUpdated] = await Notification.update(args, { where: { id } });
      if (rowsUpdated === 0) throw new Error(`Notificación con ID ${id} no encontrada.`);
      return await Notification.findByPk(id);
    },
  },
  deleteNotification: {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
    resolve: async (_, { id }) => {
      const rowsDeleted = await Notification.destroy({ where: { id } });
      if (rowsDeleted === 0) throw new Error(`Notificación con ID ${id} no encontrada.`);
      return `Notificación con ID ${id} eliminada con éxito.`;
    },
  },
};

module.exports = notificationMutations;
