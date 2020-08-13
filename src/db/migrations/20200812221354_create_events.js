
exports.up = function (knex) {
  return knex.schema.createTable('events', function (table) {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.datetime('datetime_init').notNullable()
    table.datetime('datetime_end').notNullable()
    table.integer('participants')
    table.integer('meetup_id').notNullable()
    table.integer('address_id').notNullable()
    table.foreign('meetup_id').references('id').inTable('meetups')
    table.foreign('address_id').references('id').inTable('addresses')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
