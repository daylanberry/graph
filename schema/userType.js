const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;
const mongoose = require('mongoose')
const User = mongoose.model('user')
const Post = mongoose.model('post')

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    posts: {
      type: new GraphQLList(require('./postType')),
      resolve(parent){
        return Post.find({"author": parent.id})
        .then(post => post)
      }
    }
  })
})

module.exports = UserType