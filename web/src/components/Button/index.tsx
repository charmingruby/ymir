import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface ButtonProps extends BaseButtonProps {
  variant?: 'primary' | 'secondary'
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
        'flex h-7 items-center justify-center rounded-md border-2 px-3 text-sm font-medium shadow-md transition-colors',
        className,
        {
          'border-primary-100 bg-primary-500 text-gray-700 hover:bg-primary-100':
            variant === 'primary',
          'border-gray-400 bg-gray-500 text-gray-50 hover:bg-gray-400':
            variant === 'secondary',
        },
      )}
      {...props}
    >
      {children}
    </button>
  )
}
