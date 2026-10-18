import { describe, it, expect } from 'vitest'
import {
  validateRegistration,
  type RegistrationValues,
} from './validateRegistration'

const validValues: RegistrationValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  password: 'almaty2026',
  confirmPassword: 'almaty2026',
  acceptTerms: true,
}

describe('validateRegistration', () => {
  it('returns an empty object for valid values', () => {
    expect(validateRegistration(validValues)).toEqual({})
  })

  it('rejects a name with only spaces', () => {
    const values = { ...validValues, fullName: '   ' }

    expect(validateRegistration(values).fullName).toBe(
      'Enter your full name'
    )
  })

  it('rejects an invalid email', () => {
    const values = { ...validValues, email: 'aliya@example' }

    expect(validateRegistration(values).email).toBe(
      'Enter a valid email, like name@example.com'
    )
  })

  it('accepts a valid eight-character password', () => {
    const values = {
      ...validValues,
      password: 'almaty26',
      confirmPassword: 'almaty26',
    }

    expect(validateRegistration(values)).toEqual({})
  })

  it('rejects a short password', () => {
    const values = {
      ...validValues,
      password: 'almaty2',
      confirmPassword: 'almaty2',
    }

    expect(validateRegistration(values).password).toBe(
      'Use at least 8 characters'
    )
  })

  it('requires a number in the password', () => {
    const values = {
      ...validValues,
      password: 'almatycity',
      confirmPassword: 'almatycity',
    }

    expect(validateRegistration(values).password).toBe(
      'Include at least one number'
    )
  })

  it('rejects different passwords', () => {
    const values = {
      ...validValues,
      confirmPassword: 'almaty2027',
    }

    expect(validateRegistration(values).confirmPassword).toBe(
      'Passwords do not match'
    )
  })

  it('requires accepting the terms', () => {
    const values = { ...validValues, acceptTerms: false }

    expect(validateRegistration(values).acceptTerms).toBe(
      'Accept the terms to continue'
    )
  })
})
