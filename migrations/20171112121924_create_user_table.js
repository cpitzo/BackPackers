
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function (t) {
        t.increments('id').primary()
        t.schema('user').
        t.string('password').notNullable()
        t.timestamps(false, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};

exports.config = { transaction: false };