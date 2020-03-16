const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = graphql;

const mongoose = require('mongoose')
const User = mongoose.model('user')
const Post = mongoose.model('post')
const UserType = require('./userType')
const PostType = require('./postType')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({})
      }
    },

    user: {
      type: new GraphQLNonNull(UserType),
      args: { id: { type: new GraphQLNonNull(GraphQLID)}},
      resolve(parent, { id }) {
        return User.findById(id)
      }
    },

    posts: {
      type: new GraphQLList(PostType),
      resolve() {
        return Post.find({})
      }
    },

    post: {
      type: PostType,
      args: { id: { type: new GraphQLNonNull(GraphQLID)}},

      resolve(parent, { id }) {
        return Post.findById(id)
      }
    },


  }

})

module.exports = RootQuery