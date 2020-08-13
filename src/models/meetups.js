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
            e.datetime_init as datetime_init,
            e.datetime_end as datetime_end
          from meetups as m
          left join events as e
          on m.id = e.meetup_id
          where e.datetime_init in (select min (e2.datetime_init)
            from events as e2
            where e2.datetime_init > current_date )
          group by m.id ,
            m.name ,
            m.description ,
            m.url_logo ,
            e.id ,
            e.title ,
            e.datetime_init,
            e.datetime_end
        `)
    return {
      data: meetups.rows || meetups
    }
  } catch (err) {
    throw err
  }
}

module.exports = {
  findAll
}