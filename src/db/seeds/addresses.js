const meetups = require('../../../public/meetups.json')
const { formatCode, formatName } = require('../../utils/format')

exports.seed = function (knex, promise) {
  return knex('addresses').del()
    .then(function () {
      return knex('addresses').insert([
        {
          place: formatName(meetups.address.place),
          neighborhood: formatName(meetups.address.neighborhood),
          street: formatName(meetups.address.street),
          number: parseInt(meetups.address.number),
          code: formatCode(meetups.address.code),
          city_id: 1
        }
      ])
    })
}