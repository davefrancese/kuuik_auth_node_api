const knex = require('knex')
const config = require('../knexfile')
const pg = knex(config.development)
const {getAllUsers} = require('../queries/db')

module.exports = app => {
  app.get('/', async (req, res) => {
    const data = await getAllUsers();
    res.send(data)
  })
}
