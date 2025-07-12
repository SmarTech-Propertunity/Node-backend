const { GraphQLSchema, GraphQLObjectType } = require('graphql');
// Queries
const userQueries = require('./IAM/queries/userQuery');
const notificationQueries = require('./Notifications/queries/notificationQuery');
const agentQueries = require('./Profiles/queries/agentQuery');
const acquirersQueries = require('./Profiles/queries/acquirersQuery');
const propertyQueries = require('./Properties/queries/propertyQuery');

// Mutations
const userMutations = require('./IAM/mutations/userMutation');
const notificationMutations = require('./Notifications/mutations/notificationMutation');
const agentMutations = require('./Profiles/mutations/agentMutation');
const acquirersMutations = require('./Profiles/mutations/acquirersMutation');
const propertyMutations = require('./Properties/mutations/propertyMutation');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...userQueries,
    ...notificationQueries,
    ...agentQueries,
    ...acquirersQueries,
    ...propertyQueries,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...userMutations,
    ...notificationMutations,
    ...agentMutations,
    ...acquirersMutations,
    ...propertyMutations,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
