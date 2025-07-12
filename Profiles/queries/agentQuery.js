const { GraphQLList, GraphQLInt } = require('graphql');
const AgentType = require('../types/agentType');
const Agent = require('../models/agentModel');

const agentQueries = {
  allAgents: {
    type: new GraphQLList(AgentType),
    resolve: async () => {
      return await Agent.findAll();
    },
  },
  agentById: {
    type: AgentType,
    args: { id: { type: GraphQLInt } },
    resolve: async (_, { id }) => {
      return await Agent.findByPk(id);
    },
  },
};

module.exports = agentQueries;