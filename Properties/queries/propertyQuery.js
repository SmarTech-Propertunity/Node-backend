const { GraphQLList, GraphQLInt } = require('graphql');
const PropertyType = require('../types/propertyType');
const Property = require('../models/propertyModel');

const propertyQueries = {
  allProperties: {
    type: new GraphQLList(PropertyType),
    resolve: async () => {
      const properties = await Property.findAll();
      return properties.map(prop => ({
        ...prop.dataValues,
        features: Array.isArray(prop.features) ? prop.features : [],
images: Array.isArray(prop.images) ? prop.images : [],
      }));
    },
  },
  propertyById: {
    type: PropertyType,
    args: { id: { type: GraphQLInt } },
    resolve: async (_, { id }) => {
      const prop = await Property.findByPk(id);
      if (!prop) return null;
      return {
        ...prop.dataValues,
        features: Array.isArray(prop.features) ? prop.features : [],
images: Array.isArray(prop.images) ? prop.images : [],
      };
    },
  },
};

module.exports = propertyQueries;