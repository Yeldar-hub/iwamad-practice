import { Link } from 'react-router-dom'
import type { CampusEvent } from '../data/events'
import Card from './ui/Card'
import Tag from './ui/Tag'

type EventCardProps = {
  event: CampusEvent
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article>
      <Card>
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <p>Place: {event.place}</p>
        <Tag label={`${event.seats} seats`} />
        <p>
          <Link to={`/events/${event.id}`}>Details</Link>
        </p>
      </Card>
    </article>
  )
}
