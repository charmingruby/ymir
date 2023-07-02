import { ReactNode } from 'react'

interface ContentCardProps {
  children: ReactNode
}

export function ContentCard({ children }: ContentCardProps) {
  return (
    <div className="group cursor-pointer rounded-b-md border border-t-[3px] border-gray-600 border-t-primary-300 bg-gray-700/30 p-6 shadow-sm transition-shadow hover:shadow-md">
      {children}
    </div>
  )
}
