const meetups = require('../../../public/meetups.json')
const { formatName } = require('../../utils/format')

exports.seed = function (knex, promise) {
  return knex('cities').del()
    .then(function () {
      return knex('cities').insert([
        {
          name: formatName(meetups.city),
          state_id: 1
        }
      ])
    })
}