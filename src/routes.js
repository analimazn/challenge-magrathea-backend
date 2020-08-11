const {
  meetupController,
  eventController
} = require('./controllers/index')

const express = require('express')
const routes = express.Router()

routes.get('/meetups', meetupController.list)
// const controller = require('./controller/order')

module.exports = routes