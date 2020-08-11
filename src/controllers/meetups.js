const { meetupService } = require('../services/index')

async function list(req, res) {
  try {
    const data = await meetupService.findMeetups()
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
        message: 'Error to list all meetups',
        data: []
      })
  }
}

module.exports = {
  list
}