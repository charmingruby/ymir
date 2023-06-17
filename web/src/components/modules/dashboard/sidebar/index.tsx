import { FaUserFriends } from 'react-icons/fa'
import { HiOutlineFolder } from 'react-icons/hi'
import { LuMoreHorizontal } from 'react-icons/lu'
import Image from 'next/image'
import logoUrl from '../../../../assets/images/logo.svg'

export function DashboardSidebar() {
  return (
    <div className="flex h-screen w-full max-w-xs flex-col border-r-2 border-gray-500 bg-gray-900">
      {/* Header */}
      <header className="mb-8 flex h-24 w-full items-center justify-between px-8">
        <Image src={logoUrl} alt="" width={28} height={28} />
        <LuMoreHorizontal
          className="cursor-pointer text-gray-300 transition-colors hover:text-gray-100"
          size={24}
        />
      </header>

      <div className="flex flex-col gap-12 px-8">
        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          <span className="text-sm font-medium text-gray-300">Navigation</span>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <FaUserFriends className="mb-0.5" size={18} />
              <span className=" font-medium">Organizations</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <HiOutlineFolder className="mb-0.5" size={18} />
              <span className=" font-medium">Projects</span>
            </div>
          </div>
        </nav>

        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          <span className="text-sm font-medium text-gray-300">Navigation</span>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <FaUserFriends className="mb-0.5" size={18} />
              <span className=" font-medium">Organizations</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <HiOutlineFolder className="mb-0.5" size={18} />
              <span className=" font-medium">Projects</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
