import { RxMagnifyingGlass } from 'react-icons/rx'
import { LuMoreHorizontal } from 'react-icons/lu'
import logoImage from '../../../assets/images/logo.svg'
import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="flex h-screen w-full max-w-xs flex-col border-r border-gray-600 bg-gray-900">
        {/* Header */}
        <header className="flex h-24 w-full items-center justify-between px-8">
          <Image src={logoImage} alt="" width={28} height={28} />
          <LuMoreHorizontal
            className="cursor-pointer text-gray-300 transition-colors hover:text-gray-100"
            size={24}
          />
        </header>

        {/* Navigation */}
        <nav className="p-8">
          <span className="text-sm font-medium text-gray-300">Navigation</span>
        </nav>
      </div>

      {/* Content */}
      <div className=" min-h-screen flex-1 bg-gray-700">
        {/* Search From */}
        <div className="flex h-24 w-full items-center justify-center px-8">
          <div className="flex w-full cursor-pointer rounded-md border-2 border-gray-500 bg-gray-600 py-2 shadow-sm transition-shadow hover:shadow-md">
            <RxMagnifyingGlass className="mx-2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Search projects..."
              className="flex-1 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gray-600" />
      </div>
    </div>
  )
}
