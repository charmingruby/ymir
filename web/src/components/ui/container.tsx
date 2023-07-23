import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ContainerProps {
  children: ReactNode
  larger?: boolean
}

export function Container({ children, larger = false }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto my-0 flex w-full  flex-col overflow-hidden px-4 md:px-8',
        {
          'max-w-7xl': !larger,
          'max-w-[90rem]': larger,
        },
      )}
    >
      {children}
    </div>
  )
}
