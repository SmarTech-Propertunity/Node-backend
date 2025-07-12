const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    civilStatus: { type: GraphQLString },
    profilePhoto: { type: GraphQLString },
    role: { type: new GraphQLNonNull(GraphQLString) },
    isActive: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString }
  }),
});

module.exports = UserType;