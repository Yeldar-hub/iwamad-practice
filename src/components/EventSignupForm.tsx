import { useState } from 'react'
import type { ChangeEvent, FormEvent, FocusEvent } from 'react'
import type { CampusEvent } from '../data/events'
import {
  validateSignup,
  type SignupValues,
  type SignupErrors,
} from '../lib/validateSignup'
import TextField from './ui/TextField'
import Button from './ui/Button'

type EventSignupFormProps = {
  event: CampusEvent
}

export default function EventSignupForm({
  event,
}: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })

  const [touched, setTouched] = useState<
    Partial<Record<keyof SignupValues, boolean>>
  >({})

  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [message, setMessage] = useState('')

  const errors: SignupErrors = validateSignup(values, seatsLeft)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setMessage('')
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const name = event.target.name as keyof SignupValues

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  function showError(field: keyof SignupValues) {
    return (touched[field] || submitAttempted)
      ? errors[field]
      : undefined
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    const currentErrors = validateSignup(values, seatsLeft)

    if (Object.keys(currentErrors).length > 0) {
      return
    }

    const count = Number(values.tickets)

    setSeatsLeft((current) => current - count)
    setMessage(`Booked: ${count} for ${values.fullName.trim()}.`)

    setValues({
      fullName: '',
      email: '',
      tickets: '1',
    })

    setTouched({})
    setSubmitAttempted(false)
  }

  return (
    <section>
      <h2>Book tickets</h2>

      <p>Seats left: {seatsLeft}</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          id="fullName"
          name="fullName"
          label="Full name"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('fullName')}
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('email')}
        />

        <TextField
          id="tickets"
          name="tickets"
          label="Tickets"
          type="number"
          min={1}
          max={4}
          step={1}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('tickets')}
        />

        <Button type="submit">Book</Button>
      </form>

      {message && (
        <p role="status">{message}</p>
      )}
    </section>
  )
}
