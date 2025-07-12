const { GraphQLList, GraphQLInt } = require('graphql');
const AcquirerType = require('../types/acquirersType');
const Acquirer = require('../models/acquirersModel');

const acquirersQueries = {
  allAcquirers: {
    type: new GraphQLList(AcquirerType),
    resolve: async () => {
      return await Acquirer.findAll();
    },
  },
  acquirerById: {
    type: AcquirerType,
    args: { id: { type: GraphQLInt } },
    resolve: async (_, { id }) => {
      return await Acquirer.findByPk(id);
    },
  },
};

module.exports = acquirersQueries;