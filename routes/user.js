const express = require('express')
const router = express.Router()
const User = require("../models/user");

router.post('/new', (req, res) => {
  const { name, email, password } = req.body

  User.findOne({email})
    .then(user => {
      if (user) {

        res.status(400).json({email: "a user already exists"})
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password
        })

        newUser.save()
        .then(saved => res.json(newUser))
        .catch(err => console.log(err))
      }
    })
})

module.exports = router