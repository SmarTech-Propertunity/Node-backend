const { GraphQLList, GraphQLInt } = require('graphql');
const AgentType = require('../types/agentType');
const Agent = require('../models/agentModel');

const agentQueries = {
  allAgents: {
    type: new GraphQLList(AgentType),
    resolve: async () => {
      const agents = await Agent.findAll();
      return agents.map(agent => ({
        ...agent.dataValues,
        reviews: Array.isArray(agent.reviews) ? agent.reviews : [],
        salesHistory: Array.isArray(agent.salesHistory) ? agent.salesHistory : [],
      }));
    },
  },
  agentById: {
    type: AgentType,
    args: { id: { type: GraphQLInt } },
    resolve: async (_, { id }) => {
      const agent = await Agent.findByPk(id);
      if (!agent) return null;
      return {
        ...agent.dataValues,
        reviews: Array.isArray(agent.reviews) ? agent.reviews : [],
        salesHistory: Array.isArray(agent.salesHistory) ? agent.salesHistory : [],
      };
    },
  },
};

module.exports = agentQueries;