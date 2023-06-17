import { ReactNode } from 'react'

interface ContentContainerProps {
  children: ReactNode
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="mx-auto my-0 flex w-full max-w-6xl flex-col px-4 md:px-8">
      {children}
    </div>
  )
}
