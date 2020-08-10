const meetups = require('../../../public/meetups.json')
const { formatDate, formatHour } = require('../../utils/format')

exports.seed = function (knex, promise) {
  return knex('events').del()
    .then(function () {
      const data = []
      meetups.data.forEach((meetup, index) => {
        meetup.events.forEach(event => {
          const newEvent = {
            title: String(event.title).trim(),
            event_date: formatDate(event.date),
            initial_hour: formatHour(event.initial_hour),
            end_hour: formatHour(event.end_hour),
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