const moment = require('moment')

function formatCode(code) {
  return code.replace(/[^0-9]+/, '')
}

function formatDate(date) {
  const newDate = moment(date, 'DD/MM/YYYY')
  return moment(newDate).utc().format()
}

const formatHour = (hour) => {
  if (typeof hour !== 'string') {
    const newHour = moment(hour).utc().format('HH:mm')
    return newHour
  }
  const newHour = moment(hour, 'HH:mm a').format('HH:mm')
  return newHour
}

function formatName(name) {
  return String(name).toUpperCase().trim()
}

module.exports = {
  formatCode,
  formatDate,
  formatHour,
  formatName
}