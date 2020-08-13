const meetups = require('../../../public/meetups.json')
const { formatName } = require('../../utils/format')

exports.seed = function (knex, promise) {
  return knex('countries').del()
    .then(function () {
      return knex('countries').insert([
        { name: formatName(meetups.country) }
      ])
    })
}