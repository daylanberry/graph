const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }]
})



const User = mongoose.model('user', UserSchema)

// User.create({
//   name: "day",
//   email: "daylan@gmail.com",
//   password: "1234",
// })

module.exports = User