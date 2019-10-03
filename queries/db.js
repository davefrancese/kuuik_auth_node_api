const knex = require('knex')
const config = require('../knexfile')
const pg = knex(config.development)

const getAllUsers = async () => {
  return await pg.select().from('users')
}

module.exports = {
  getAllUsers
}
