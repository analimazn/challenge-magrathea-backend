const {
  appController,
  meetupController,
  eventController
} = require('./controllers/index')

const express = require('express')
const routes = express.Router()

routes.get('/', appController.index)

routes.get('/meetups', meetupController.listMeetups)

routes.get('/events/past/:meetupId', eventController.listPastEventsByMeetupId)
routes.get('/events/current/:meetupId', eventController.listCurrentEventsByMeetupId)

module.exports = routes