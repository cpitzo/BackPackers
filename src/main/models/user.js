const knex = require('knex')(require('../../../knexfile'))

module.exports = {

  insertUser ({ username, encrypted_password, salt }) {
    return knex('user').insert({
      salt,
      encrypted_password,
      username
    })
  },
  getUser ({ username }) {
    return knex('user').where({ username })
  }
}
