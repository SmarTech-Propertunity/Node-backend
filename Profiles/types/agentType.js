const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList, GraphQLFloat } = require('graphql');

const AgentType = new GraphQLObjectType({
  name: 'Agent',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
    phone: { type: GraphQLString },
    whatsapp: { type: GraphQLString },
    address: { type: GraphQLString },
    schedule: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    reviews: { type: new GraphQLList(GraphQLString) },
    salesHistory: { type: new GraphQLList(GraphQLInt) },
    responseSpeed: { type: GraphQLFloat }
  }),
});

module.exports = AgentType;