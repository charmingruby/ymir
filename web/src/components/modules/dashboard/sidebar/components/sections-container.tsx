import { ReactNode } from 'react'

interface DashboardSidebarSectionsContainerProps {
  children: ReactNode
}

export function DashboardSidebarSectionsContainer({
  children,
}: DashboardSidebarSectionsContainerProps) {
  return (
    <section className="flex flex-col gap-4 border-b-2 border-gray-600 py-8">
      {children}
    </section>
  )
}
