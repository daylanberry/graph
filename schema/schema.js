const graphql = require('graphql')
const { GraphQLSchema } = graphql

const RootQueryType = require('./root.js')
const mutation = require('./mutations')

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
})