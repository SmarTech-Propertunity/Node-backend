const { GraphQLList, GraphQLInt } = require('graphql');
const UserType = require('../types/userType');
const User = require('../models/userModel');

const userQueries = {
  allUsers: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      return await User.findAll();
    },
  },
  userById: {
    type: UserType,
    args: { id: { type: GraphQLInt } },
    resolve: async (_, { id }) => {
      return await User.findByPk(id);
    },
  },
};

module.exports = userQueries;