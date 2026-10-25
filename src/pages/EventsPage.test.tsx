import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EventsPage from './EventsPage'
import { events } from '../data/events'

describe('EventsPage', () => {
  it('renders one article for each event', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    )

    expect(screen.getAllByRole('article')).toHaveLength(
      events.length
    )
  })
})
