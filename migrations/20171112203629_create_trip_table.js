
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trips', function (t) {
        t.increments('id').primary();
        t.integer('user_id')
            .references('id')
            .inTable('user');
        t.string('name').notNullable();
        t.string('location').notNullable(); 
        t.timestamps(false, true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips')
};
