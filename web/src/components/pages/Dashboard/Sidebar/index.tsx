import { Header } from './Header'
import { Navigation } from './Navigation'
import { ProjectList } from './ProjectList'

export function Sidebar() {
  return (
    <div className="relative flex h-screen w-72  flex-col ">
      <Header />
      <div className="flex-1 overflow-y-auto scroll-smooth border-r-2 border-gray-500 bg-gray-800 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-500">
        <Navigation />
        <ProjectList />
      </div>
    </div>
  )
}
