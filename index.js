const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressGraphQL = require('express-graphql')
const User = require('./models/user');
const Post = require('./models/posts')
const schema = require('./schema/schema')
const cors = require('cors')
const createNewUser = require('./routes/user')
const posts = require('./routes/posts')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true })
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err))


app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
)

app.use('/users', createNewUser)

app.use('/users', posts)

const port = 3000

app.listen(port, () => console.log('listening on port ' + port))