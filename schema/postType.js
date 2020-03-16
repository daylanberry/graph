const graphql = require('graphql')
const UserType = require('./userType')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;


const PostType = new GraphQLObjectType({
  name: "postType",
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: UserType,
      resolve(parent) {
        console.log("postType", parent)
        return User.findById(parent.author)
          .then(user => user)
          .catch(err => console.log(err))
      }
    }
  }
})

module.exports = PostType;