const knex = require('knex')
const config = require('../knexfile')
const pg = knex(config.development)
const {getAllUsers} = require('../queries/db')

module.exports = app => {
  app.get('/', async (req, res) => {
    const data = await getAllUsers();
    res.send(data)
  })

  app.post('/auth/signUp', async (req, res, next) => {
    // take in req.body.email & req.body.password
    // hash and salt email & password
    // save in 'users' table
    // make token
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
