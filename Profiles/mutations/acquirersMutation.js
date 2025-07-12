const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const Acquirer = require('../models/acquirersModel');
const AcquirerType = require('../types/acquirersType');

const acquirersMutations = {
  createAcquirer: {
    type: AcquirerType,
    args: {
      userId: { type: new GraphQLNonNull(GraphQLInt) },
      preferences: { type: GraphQLString },
      creditEvaluation: { type: GraphQLString },
      contactHistory: { type: new GraphQLList(GraphQLInt) }
    },
    resolve: (_, args) => Acquirer.create(args),
  },
  updateAcquirer: {
    type: AcquirerType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      preferences: { type: GraphQLString },
      creditEvaluation: { type: GraphQLString },
      contactHistory: { type: new GraphQLList(GraphQLInt) }
    },
    resolve: async (_, { id, ...args }) => {
      const [rowsUpdated] = await Acquirer.update(args, { where: { id } });
      if (rowsUpdated === 0) throw new Error(`Acquirer con ID ${id} no encontrado.`);
      return await Acquirer.findByPk(id);
    },
  },
  deleteAcquirer: {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
    resolve: async (_, { id }) => {
      const rowsDeleted = await Acquirer.destroy({ where: { id } });
      if (rowsDeleted === 0) throw new Error(`Acquirer con ID ${id} no encontrado.`);
      return `Acquirer con ID ${id} eliminado con éxito.`;
    },
  },
};

module.exports = acquirersMutations;