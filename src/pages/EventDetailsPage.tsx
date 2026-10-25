import { Link, useParams } from 'react-router-dom'
import { events } from '../data/events'

export default function EventDetailsPage() {
  const { eventId } = useParams()

  const event = events.find(
    (item) => item.id === Number(eventId)
  )

  if (!event) {
    return (
      <section>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to Events</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{event.title}</h1>

      <p>Date: {event.date}</p>
      <p>Place: {event.place}</p>
      <p>Available seats: {event.seats}</p>

      <Link to="/events">Back to Events</Link>
    </section>
  )
}
