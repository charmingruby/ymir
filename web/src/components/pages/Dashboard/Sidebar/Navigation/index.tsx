'use client'

import { ReactNode } from 'react'
import { AiOutlineFire } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { HiOutlineFolder } from 'react-icons/hi'
import { LuSettings } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import { SectionContainer } from '../SectionContainer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string
  link: string
  icon: ReactNode
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <RxDashboard size={18} />,
  },
  {
    name: 'Organizations',
    link: '/dashboard/organizations',
    icon: <FaUserFriends size={18} />,
  },
  {
    name: 'Projects',
    link: '/dashboard/projects',
    icon: <HiOutlineFolder size={18} />,
  },
  {
    name: 'Partners',
    link: '/dashboard/partners',
    icon: <AiOutlineFire size={18} />,
  },
  {
    name: 'Assignments',
    link: '/dashboard/assignments',
    icon: <BiTask size={18} />,
  },
  {
    icon: <LuSettings size={18} />,
    name: 'Settings',
    link: '/dashboard/settings',
  },
]

export function Navigation() {
  const currentRoute = usePathname()

  return (
    <SectionContainer>
      {/* Title */}
      <span className="px-6 text-sm font-medium text-gray-300">Navigation</span>

      {/* Links */}
      <div className="flex cursor-pointer flex-col gap-1">
        {navigationItems.map((item) => (
          <Link href={item.link} key={item.name} prefetch={false}>
            <div
              className={`${
                currentRoute === item.link
                  ? 'border-r-2 border-primary-100 bg-gray-700 text-primary-100'
                  : 'text-gray-200'
              } flex items-center gap-2 px-6 py-3 transition-colors hover:bg-gray-600 hover:text-primary-100`}
            >
              {item.icon}
              <span className=" font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  )
}
