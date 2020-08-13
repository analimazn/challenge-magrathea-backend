const { eventModel } = require('../models/index')
const { parseEvent } = require('../utils/formatEvent')

async function listPastEventsByMeetupId(meetupId) {
  try {
    const data = await eventModel.findPastEventsByMeetupId(meetupId)
    const events = await data.data.map(obj => {
      return parseEvent(obj)
    })
    return events
  } catch (err) {
    throw err
  }
}

async function listCurrentEventsByMeetupId(meetupId) {
  try {
    const data = await eventModel.findCurrentEventsByMeetupId(meetupId)
    const events = await data.data.map(obj => {
      return parseEvent(obj)
    })
    return events
  } catch (err) {
    throw err
  }
}

module.exports = {
  listPastEventsByMeetupId,
  listCurrentEventsByMeetupId
}