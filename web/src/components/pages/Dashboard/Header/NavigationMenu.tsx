'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string
  link: string
}

/*
  Dashboard -> Project Data 
  Documentation -> Documentation, routes, entities, requirements, etc.
  Implementation -> Tasks
  Monitoring -> Execution of tasks
  Conclusion -> What is finished
*/

const navigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    name: 'Documentation',
    link: '/',
  },
  {
    name: 'Implementation',
    link: '/',
  },
  {
    name: 'Monitoring',
    link: '/monitoring',
  },
  {
    name: 'Conclusion',
    link: '/monitoring',
  },
]

export function NavigationMenu() {
  const currentRoute = usePathname()

  return (
    <div className="flex h-12 items-center gap-4">
      {navigationItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={`
        ${
          currentRoute === item.link
            ? 'border-b-2 border-primary-100  text-primary-100'
            : 'text-gray-200'
        } 
        h-12 text-sm font-medium`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
