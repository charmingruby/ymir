import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto my-0 flex w-full max-w-6xl flex-col overflow-hidden px-4 md:px-8">
      {children}
    </div>
  )
}
