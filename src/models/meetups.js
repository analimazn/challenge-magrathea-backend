const knex = require('../db/connection')

async function findAll() {
  try {
    const meetups = await knex
      .raw(`
        select m.id,
              m.name,
              m.description,
              m.url_logo,
              e.title,
              e.datetime_init,
              e.datetime_end
          from meetups as m
          left join events as e
          on m.id = e.meetup_id
          where e.datetime_init > CURRENT_DATE
          order by e.datetime_init asc
        `)
    return meetups
  } catch (err) {
    throw err
  }
}

module.exports = {
  findAll
}