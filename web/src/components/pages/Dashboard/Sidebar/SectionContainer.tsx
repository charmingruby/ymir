import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <section className="flex flex-col gap-4 py-8">{children}</section>
}
