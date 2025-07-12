const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat } = require('graphql');
const Agent = require('../models/agentModel');
const AgentType = require('../types/agentType');

const agentMutations = {
  createAgent: {
    type: AgentType,
    args: {
      userId: { type: new GraphQLNonNull(GraphQLInt) },
      phone: { type: GraphQLString },
      whatsapp: { type: GraphQLString },
      address: { type: GraphQLString },
      schedule: { type: GraphQLString },
      rating: { type: GraphQLFloat },
      reviews: { type: new GraphQLList(GraphQLString) },
      salesHistory: { type: new GraphQLList(GraphQLInt) },
      responseSpeed: { type: GraphQLFloat }
    },
    resolve: (_, args) => Agent.create(args),
  },
  updateAgent: {
    type: AgentType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      phone: { type: GraphQLString },
      whatsapp: { type: GraphQLString },
      address: { type: GraphQLString },
      schedule: { type: GraphQLString },
      rating: { type: GraphQLFloat },
      reviews: { type: new GraphQLList(GraphQLString) },
      salesHistory: { type: new GraphQLList(GraphQLInt) },
      responseSpeed: { type: GraphQLFloat }
    },
    resolve: async (_, { id, ...args }) => {
      const [rowsUpdated] = await Agent.update(args, { where: { id } });
      if (rowsUpdated === 0) throw new Error(`Agente con ID ${id} no encontrado.`);
      return await Agent.findByPk(id);
    },
  },
  deleteAgent: {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
    resolve: async (_, { id }) => {
      const rowsDeleted = await Agent.destroy({ where: { id } });
      if (rowsDeleted === 0) throw new Error(`Agente con ID ${id} no encontrado.`);
      return `Agente con ID ${id} eliminado con éxito.`;
    },
  },
};

module.exports = agentMutations;