
exports.up = function(knex) {
  return knex.schema.createTable('states', function (table) {
    table.increments('id')
    table.string('name').notNullable()
    table.integer('country_id').notNullable()
    table.foreign('country_id').references('id').inTable('countries')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('states')
}
