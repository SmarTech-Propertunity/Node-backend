const { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } = require('graphql');

const AppointmentType = new GraphQLObjectType({
  name: 'Appointment',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    agentId: { type: new GraphQLNonNull(GraphQLInt) },
    acquireId: { type: new GraphQLNonNull(GraphQLInt) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    propertyId: { type: new GraphQLNonNull(GraphQLInt) },
    place: { type: new GraphQLNonNull(GraphQLString) }
  }),
});

module.exports = AppointmentType;
