/* eslint-disable */

'use client'

import { ComponentProps, forwardRef } from 'react'

type InputControlProps = ComponentProps<'input'> & {
  hasError: boolean
}

const Control = forwardRef<HTMLInputElement, InputControlProps>(
  ({ hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          w-full bg-white h-12 px-4 outline-none box-border transition-colors border rounded-md
          ${hasError
            ? 'border-danger-300 placeholder-danger-300'
            : 'border-gray-100 placeholder-gray-200 focus:border-primary-300 '
          }
        `}
        {...props}
      />
    )
  },
)

export { Control }
