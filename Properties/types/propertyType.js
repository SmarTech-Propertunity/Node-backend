const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList, GraphQLFloat, GraphQLBoolean } = require('graphql');

const MetricsType = new GraphQLObjectType({
  name: 'Metrics',
  fields: () => ({
    views: { type: GraphQLInt },
    clicks: { type: GraphQLInt },
    contactRequests: { type: GraphQLInt },
  }),
});

const PropertyType = new GraphQLObjectType({
  name: 'Property',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    dimensions: { type: GraphQLString },
    rooms: { type: GraphQLInt },
    features: { type: new GraphQLList(GraphQLString) },
    images: { type: new GraphQLList(GraphQLString) },
    agentId: { type: new GraphQLNonNull(GraphQLInt) },
    metrics: { type: MetricsType },
    createdAt: { type: GraphQLString },
    isActive: { type: GraphQLBoolean }
  }),
});

module.exports = PropertyType;