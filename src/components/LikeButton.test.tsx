import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'

test('like button works', async () => {
  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>
  )

  const button = screen.getByRole('button')

  expect(button).toHaveTextContent('Like ♥ 0')

  await userEvent.click(button)

  expect(button).toHaveTextContent('Like ♥ 1')
})