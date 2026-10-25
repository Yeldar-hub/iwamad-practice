import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export default function TextField({
  label,
  error,
  id,
  className = '',
  ...props
}: TextFieldProps) {
  const generatedId = useId()
  const inputId = id || generatedId
  const errorId = `${inputId}-error`

  return (
    <div className="field">
      <label htmlFor={inputId}>{label}</label>

      <input
        {...props}
        id={inputId}
        className={className}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error
            ? [props['aria-describedby'], errorId]
                .filter(Boolean)
                .join(' ')
            : props['aria-describedby']
        }
      />

      {error && (
        <p className="field-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}
