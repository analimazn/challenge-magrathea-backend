
exports.up = function(knex) {
  return knex.schema.createTable('meetups', function (table) {
    table.increments('id')
    table.string('name').notNullable()
    table.string('description')
    table.string('url_logo')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('meetups')
}
