const { eventService } = require('../services/index')

async function listPastEventsByMeetupId(req, res) {
  try {
    const meetupId = req.params.meetupId
    const data = await eventService.listPastEventsByMeetupId(meetupId)
    res
      .status(200)
      .json({
        success: true,
        message: 'Connection successfully',
        data: data
      })

  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({
        success: false,
        message: 'Error to list past events',
        data: []
      })
  }
}

async function listCurrentEventsByMeetupId(req, res) {
  try {
    const meetupId = req.params.meetupId
    const data = await eventService.listCurrentEventsByMeetupId(meetupId)
    res
      .status(200)
      .json({
        success: true,
        message: 'Connection successfully',
        data: data
      })

  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: 'Error to list current events',
        data: []
      })
  }
}

module.exports = {
  listPastEventsByMeetupId,
  listCurrentEventsByMeetupId
}