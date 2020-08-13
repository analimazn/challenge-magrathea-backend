const meetups = require('../../../public/meetups.json')
const { formatDatetime } = require('../../utils/format')

exports.seed = function (knex, promise) {
  return knex('events').del()
    .then(function () {
      const data = []
      meetups.data.forEach((meetup, index) => {
        meetup.events.forEach(event => {
          const newEvent = {
            title: String(event.title).trim(),
            datetime_init: formatDatetime(event.datetime_init),
            datetime_end: formatDatetime(event.datetime_end),
            participants: parseInt(event.participants),
            meetup_id: index,
            address_id: 1
          }
          data.push(newEvent)
        })
      })
      return knex('events').insert(data)
    })
}