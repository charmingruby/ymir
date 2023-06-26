'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string
  link: string
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    name: 'Organizations',
    link: '/dashboard/organizations',
  },
  {
    name: 'Projects',
    link: '/dashboard/projects',
  },
  {
    name: 'Partners',
    link: '/dashboard/partners',
  },
  {
    name: 'Assignments',
    link: '/dashboard/assignments',
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
