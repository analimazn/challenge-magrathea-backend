
exports.up = function(knex) {
  return knex.schema.createTable('meetups', function (table) {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.string('description')
    table.string('url_logo')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('meetups')
}
