const knex = require('../db/connection')

async function findAll() {
  try {
    const meetups = await knex
      .raw(`
        select m.id as id,
              m.name as name,
              m.description as description,
              m.url_logo as url_logo,
              e.id as event_id,
              e.title as title,
              min(e.datetime_init) as datetime_init,
              e.datetime_end as datetime_end
          from meetups as m
          left join events as e
          on m.id = e.meetup_id
          where e.datetime_init > CURRENT_DATE
		      group by m.id
        `)
    return meetups
  } catch (err) {
    throw err
  }
}

module.exports = {
  findAll
}