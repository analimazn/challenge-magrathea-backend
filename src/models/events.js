const knex = require('../db/connection')

async function findPastEventsByMeetupId(meetupId) {
  try {
    const events = await knex
      .raw(`
        select e.id,
            e.title,
            e.datetime_init,
            e.datetime_end,
            e.participants,
            e.meetup_id,
            a.place,
            a.neighborhood,
            a.street,
            a.number,
            a.code,
            c.name as city,
            s.uf,
            cn.name as country
        from addresses as a
        left join events as e on a.id=e.address_id
        left join cities as c on a.city_id=c.id
        left join states as s on c.state_id=s.id
        left join countries as cn on s.country_id=cn.id
        where e.meetup_id=${meetupId}
        and e.datetime_init < CURRENT_DATE
      `)
    return events
  } catch (err) {
    throw err
  }
}

async function findCurrentEventsByMeetupId(meetupId) {
  try {
    const events = await knex
      .raw(`
        select e.id,
            e.title,
            e.datetime_init,
            e.datetime_end,
            e.participants,
            e.meetup_id,
            a.place,
            a.neighborhood,
            a.street,
            a.number,
            a.code,
            c.name as city,
            s.uf,
            cn.name as country
        from addresses as a
        left join events as e on a.id=e.address_id
        left join cities as c on a.city_id=c.id
        left join states as s on c.state_id=s.id
        left join countries as cn on s.country_id=cn.id
        where e.meetup_id=${meetupId}
        and e.datetime_init > CURRENT_DATE
      `)
    return events
  } catch (err) {
    throw err
  }
}

module.exports = {
  findPastEventsByMeetupId,
  findCurrentEventsByMeetupId
}