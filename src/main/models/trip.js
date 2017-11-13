const knex = require('knex')(require('../../../knexfile'))

module.exports = {
  insertTrip ({ userId, tripName, tripLocation }) {
    console.log(`Add trip ${tripName} to ${userId}`)
    return knex('trip').insert({
      tripName,
      tripLocation,
      userId
    })
  }
}