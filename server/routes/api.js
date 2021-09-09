const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')

const User = require('../models/user')
const Todo = require('../models/todo')

const mongoose = require('mongoose');

require('dotenv').config()

const user = process.env.DB_USERNAME
const pass = process.env.DB_PASS

const uri = `mongodb+srv://${user}:${pass}@cluster0.wmr7y.mongodb.net/authentication?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log('connect to db'))
.catch((err) => console.log(err))

// build a costomized token checking middleware
function verifyToken(req, res, next){
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/', (req, res) => {
  res.send('from API folder')
})
 
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save().then(
    (result) => {
      // jwt generates token
      let payload = { subject: result._id }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  ).catch(
    (err) => console.log(err)
  );
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, advance) => {
    if (err) {
      console.log(err)
    } else {
      if (!advance) {
        res.status(401).send("invalid email")
      } else {
        if (advance.password !== userData.password){
          res.status(401).send("invalid password")
        } else {
          let payload = { subject: advance._id }
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    }
  })
})

module.exports = router;