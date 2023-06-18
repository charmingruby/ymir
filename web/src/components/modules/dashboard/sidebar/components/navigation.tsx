import { ReactNode } from 'react'
import { AiOutlineFire } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { HiOutlineFolder } from 'react-icons/hi'
import { LuAlbum, LuSettings } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'

interface NavigationItem {
  name: string
  icon: ReactNode
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    icon: <RxDashboard size={18} />,
  },
  {
    name: 'Organizations',
    icon: <FaUserFriends size={18} />,
  },
  {
    name: 'Projects',
    icon: <HiOutlineFolder size={18} />,
  },
  {
    name: 'Partners',
    icon: <AiOutlineFire size={18} />,
  },
  {
    name: 'Assignment',
    icon: <BiTask size={18} />,
  },
  {
    name: 'Settings',
    icon: <LuSettings size={18} />,
  },
]

export function DashboardSidebarNavigation() {
  return (
    <nav className="flex flex-col gap-4 py-8">
      {/* Title */}
      <span className="px-8 text-sm font-medium text-gray-300">Navigation</span>

      {/* Links */}
      <div className="flex cursor-pointer flex-col gap-1">
        <div className="ml-6 flex items-center gap-2 rounded-l-md border-r-2 border-primary-100 bg-gray-700 px-2 py-3 text-primary-100 hover:bg-gray-600 hover:text-primary-300">
          <LuAlbum size={18} />
          <span className="font-medium">Bookmark</span>
        </div>
        {navigationItems.map((item) => (
          <div
            key={item.name}
            className="ml-6 flex items-center gap-2 rounded-l-md px-2 py-3 text-gray-200 hover:bg-gray-600 hover:text-primary-100"
          >
            {item.icon}
            <span className=" font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </nav>
  )
}
