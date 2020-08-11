const meetups = require('../../../public/meetups.json')
const { formatName } = require('../../utils/format')

exports.seed = function (knex, promise) {
  return knex('states').del()
    .then(function () {
      return knex('states').insert([
        {
          name: formatName(meetups.state),
          uf: formatName(meetups.uf),
          country_id: 1
        }
      ])
    })
}