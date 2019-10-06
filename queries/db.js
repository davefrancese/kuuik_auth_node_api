const knex = require('knex')
const config = require('../knexfile')
const pg = knex(config.development)

const getAllUsers = async () => {
  return await pg.select().from('users')
}

const signUpUser = async (email, password, role) => {
  return await pg('users').insert(
    {
      email,
      password,
      role
    }
  ).returning('*')
}

module.exports = {
  getAllUsers,
  signUpUser
}
