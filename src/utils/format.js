const moment = require('moment')

function formatCode(code) {
  const newCode = code.replace(/[^0-9]+/, '')
  return newCode
}

function formatDatetime(date) {
  const newDate = moment(date).local().format('YYYY-MM-DD HH:mm:ss')
  return newDate
}

function formatName(name) {
  const newName = String(name).toUpperCase().trim()
  return newName
}

module.exports = {
  formatCode,
  formatDatetime,
  formatName
}