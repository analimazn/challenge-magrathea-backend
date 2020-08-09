
exports.up = function(knex) {
  return knex.schema.createTable('events', function (table) {
    table.increments('id')
    table.string('title').notNullable()
    table.date('event_date').notNullable()
    table.time('initial_hour').notNullable()
    table.time('end_hour').notNullable()
    table.integer('meetup_id').notNullable()
    table.foreign('meetup_id').references('id').inTable('meetups')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('events')
}
