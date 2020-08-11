const { meetupModel } = require('../models/index')
const { parseMeetup } = require('../utils/formatMeetup')

async function listMeetups() {
  try {
    const data = await meetupModel.findAll()
    const meetups = await data.map(obj => {
      return parseMeetup(obj)
    })
    return meetups
  } catch(err) {
    throw err
  }
}

module.exports = {
  listMeetups
}