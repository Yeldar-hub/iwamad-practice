export type CampusEvent = {
  id: number
  title: string
  date: string
  place: string
  seats: number
}

export const events: CampusEvent[] = [
  {
    id: 1,
    title: 'KBTU Tech Meetup',
    date: '2026-11-05',
    place: 'KBTU Main Hall',
    seats: 20,
  },
  {
    id: 2,
    title: 'Python Workshop',
    date: '2026-11-10',
    place: 'KBTU Computer Lab',
    seats: 15,
  },
  {
    id: 3,
    title: 'Startup Networking',
    date: '2026-11-15',
    place: 'KBTU Innovation Hub',
    seats: 2,
  },
  {
    id: 4,
    title: 'AI Hackathon',
    date: '2026-11-20',
    place: 'KBTU Conference Hall',
    seats: 30,
  },
]
