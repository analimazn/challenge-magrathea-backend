exports.up = function (knex) {
  return knex.schema.createTable('addresses', function (table) {
    table.increments('id').primary()
    table.string('place').notNullable()
    table.string('neighborhood').notNullable()
    table.string('street').notNullable()
    table.integer('number').notNullable()
    table.bigInteger('code').notNullable().unique()
    table.integer('city_id').notNullable()
    table.foreign('city_id').references('id').inTable('cities')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('addresses')
}
