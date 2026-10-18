import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Button from '../components/ui/Button'
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration'

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [registered, setRegistered] = useState(false)

  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setRegistered(true)
    }
  }

  if (registered) {
    return (
      <main>
        <h1>Registration</h1>
        <p role="status">
          Thanks, {values.fullName.trim()}. You are registered.
        </p>
      </main>
    )
  }

  return (
    <main>
      <h1>Registration</h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            aria-invalid={submitAttempted && !!errors.fullName}
            aria-describedby={
              submitAttempted && errors.fullName
                ? 'fullName-error'
                : undefined
            }
          />
          {submitAttempted && errors.fullName && (
            <p className="field-error" id="fullName-error">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={submitAttempted && !!errors.email}
            aria-describedby={
              submitAttempted && errors.email
                ? 'email-error'
                : undefined
            }
          />
          {submitAttempted && errors.email && (
            <p className="field-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            aria-invalid={submitAttempted && !!errors.password}
            aria-describedby={
              submitAttempted && errors.password
                ? 'password-error'
                : undefined
            }
          />
          {submitAttempted && errors.password && (
            <p className="field-error" id="password-error">
              {errors.password}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            aria-invalid={submitAttempted && !!errors.confirmPassword}
            aria-describedby={
              submitAttempted && errors.confirmPassword
                ? 'confirmPassword-error'
                : undefined
            }
          />
          {submitAttempted && errors.confirmPassword && (
            <p className="field-error" id="confirmPassword-error">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div>
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              aria-invalid={submitAttempted && !!errors.acceptTerms}
              aria-describedby={
                submitAttempted && errors.acceptTerms
                  ? 'acceptTerms-error'
                  : undefined
              }
            />
            I accept the terms
          </label>
          {submitAttempted && errors.acceptTerms && (
            <p className="field-error" id="acceptTerms-error">
              {errors.acceptTerms}
            </p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </main>
  )
}

