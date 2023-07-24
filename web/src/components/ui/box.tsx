import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface BoxProps {
  children: ReactNode
  spacing?: 'sm' | 'md' | 'lg'
}

export function Box({ children, spacing = 'md' }: BoxProps) {
  return (
    <div
      className={clsx(
        'flex w-full cursor-pointer items-center justify-start gap-4 rounded-md border border-gray-500 bg-gray-700 shadow-lg transition-shadow hover:shadow-lg',
        {
          'p-2.5': spacing === 'sm',
          'p-4': spacing === 'md',
          'p-8': spacing === 'lg',
        },
      )}
    >
      {children}
    </div>
  )
}
