const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const NotificationType = new GraphQLObjectType({
  name: 'Notification',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    message: { type: new GraphQLNonNull(GraphQLString) },
    link: { type: GraphQLString },
    isRead: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString }
  }),
});

module.exports = NotificationType;