const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql
const mongoose = require('mongoose')
const UserType = require('./userType')
const User = mongoose.model('user')
const Post = mongoose.mode('post')

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields:{
    newUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, { name, email, password }) {
        const newUser = new User({
          name,
          email,
          password
        })
        return newUser.save()
      }
    },
    newPost: {
      type:
    }
  }
})

module.exports = mutation