import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface ButtonProps extends BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'uncolored'
}

export function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex h-10 items-center justify-center rounded-md border-2 px-3 text-sm font-medium shadow-md transition-colors',
        className,
        {
          'border-primary-500 bg-primary-500 text-gray-700 transition-colors hover:border-primary-100 hover:bg-primary-100':
            variant === 'primary',
          'border-primary-500 transition-colors hover:bg-primary-500 hover:text-gray-700':
            variant === 'secondary',
          'border-gray-300 bg-gray-500 text-gray-50 transition-colors hover:bg-gray-400':
            variant === 'uncolored',
        },
      )}
      {...props}
    >
      {children}
    </button>
  )
}
