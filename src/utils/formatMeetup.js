function parseMeetup(meetup) {
  const newMeetup = {
    id: meetup.id,
    name: meetup.name,
    description: meetup.description,
    url_logo: meetup.url_logo,
    next_event: {
      title: meetup.title,
      datetime_init: meetup.datetime_init,
      datetime_end: meetup.datetime_end
    }
  }
  return newMeetup
}

module.exports = {
  parseMeetup
}