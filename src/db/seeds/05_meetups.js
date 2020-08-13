const meetups = require('../../../public/meetups.json')

exports.seed = function (knex, promise) {
  return knex('meetups').del()
  .then(function () {
    const data = meetups.data.map((meetup, index) => {
      return {
        id: index,
        name: String(meetup.name).trim(),
        url_logo: meetup.logo,
        description: String(meetup.description).trim()
      }
    })
    return knex('meetups').insert(data)
    })
}