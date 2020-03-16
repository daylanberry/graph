const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model('post')


router.post('/posts', (req, res) => {
  const { title, author, body, date } = req.body;

  const newPost = new Post({
    title,
    author,
    body,
    date
  })

  newPost.save()
  .then(post => res.json(post))
  .catch(err => console.log(err))
})


module.exports = router