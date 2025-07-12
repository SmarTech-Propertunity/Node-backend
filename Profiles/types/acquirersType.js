const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql');

const AcquirerType = new GraphQLObjectType({
  name: 'Acquirer',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
    preferences: { type: GraphQLString }, // Puedes usar GraphQLJSON si tienes el tipo instalado
    creditEvaluation: { type: GraphQLString },
    contactHistory: { type: new GraphQLList(GraphQLInt) }
  }),
});

module.exports = AcquirerType;