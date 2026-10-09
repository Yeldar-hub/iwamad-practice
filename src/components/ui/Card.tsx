import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLElement>

export default function Card({
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <article className={`card ${className}`} {...props}>
      {children}
    </article>
  )
}