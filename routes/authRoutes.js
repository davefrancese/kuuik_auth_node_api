const knex = require('knex')
const config = require('../knexfile')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pg = knex(config.development)
const {getAllUsers, signUpUser} = require('../queries/db')

module.exports = app => {
  app.get('/', async (req, res) => {
    const data = await getAllUsers();
    res.send(data)
  })

  app.post('/auth/signUp', async (req, res, next) => {
    const hashPassword = async (password) => {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      return await bcrypt.hash(password, salt)
    }
    const hashedUserPassword = await hashPassword(req.body.user.password)
    // generate token
    const token = jwt.sign({user: req.body.user.token}, 'secretKey')
    const data = await signUpUser(req.body.user.email, hashedUserPassword, req.body.user.role)
    res.send({data, token})
    // send token to frontend to save in local storage
  })

  app.post('/auth/login', async (req, res, next) => {
    // take in req.body.email & req.body.password
    // bcrypt compare
    // if true: make token
    // send token to frontend to save in local storage
  })

  app.post('/auth/logout', async (req, res, next) => {
    // revoke token
  })
}
