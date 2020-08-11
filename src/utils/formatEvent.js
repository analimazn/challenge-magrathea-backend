function parseEvent(event) {
  const newEvent = {
    id: event.id,
    title: event.title,
    datetime_init: event.datetime_init,
    datetime_end: event.datetime_end,
    participants: event.participants,
    meetup_id: event.meetup_id,
    address: {
      place: event.place,
      neighborhood: event.neighborhood,
      street: event.street,
      number: event.number,
      code: event.code,
      city: event.city,
      uf: event.uf,
      country: event.country
    }
  }
  return newEvent
}

module.exports = {
  parseEvent
}

