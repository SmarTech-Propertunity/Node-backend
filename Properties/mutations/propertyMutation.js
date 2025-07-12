const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat, GraphQLBoolean } = require('graphql');
const Property = require('../models/propertyModel');
const PropertyType = require('../types/propertyType');

const propertyMutations = {
  createProperty: {
    type: PropertyType,
    args: {
      title: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
      price: { type: new GraphQLNonNull(GraphQLFloat) },
      location: { type: new GraphQLNonNull(GraphQLString) },
      dimensions: { type: GraphQLString },
      rooms: { type: GraphQLInt },
      features: { type: new GraphQLList(GraphQLString) },
      images: { type: new GraphQLList(GraphQLString) },
      agentId: { type: new GraphQLNonNull(GraphQLInt) },
      metrics: { type: GraphQLString },
      isActive: { type: GraphQLBoolean }
    },
    resolve: (_, args) => Property.create(args),
  },
  updateProperty: {
    type: PropertyType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      price: { type: GraphQLFloat },
      location: { type: GraphQLString },
      dimensions: { type: GraphQLString },
      rooms: { type: GraphQLInt },
      features: { type: new GraphQLList(GraphQLString) },
      images: { type: new GraphQLList(GraphQLString) },
      agentId: { type: GraphQLInt },
      metrics: { type: GraphQLString },
      isActive: { type: GraphQLBoolean }
    },
    resolve: async (_, { id, ...args }) => {
      const [rowsUpdated] = await Property.update(args, { where: { id } });
      if (rowsUpdated === 0) throw new Error(`Propiedad con ID ${id} no encontrada.`);
      return await Property.findByPk(id);
    },
  },
  deleteProperty: {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
    resolve: async (_, { id }) => {
      const rowsDeleted = await Property.destroy({ where: { id } });
      if (rowsDeleted === 0) throw new Error(`Propiedad con ID ${id} no encontrada.`);
      return `Propiedad con ID ${id} eliminada con éxito.`;
    },
  },
};

module.exports = propertyMutations;