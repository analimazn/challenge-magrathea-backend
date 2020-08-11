const { meetupModel } = require('../models/index')

async function findMeetups() {
  try {
    const meetups = await meetupModel.findAll()
    return meetups
  } catch(err) {
    throw err
  }
}

module.exports = {
  findMeetups
}