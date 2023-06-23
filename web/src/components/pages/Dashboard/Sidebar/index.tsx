import { Projects } from './Projects'

export function Sidebar() {
  return (
    <div className="relative flex w-72 flex-col overflow-auto scroll-smooth border-r-2 border-gray-500 bg-gray-800 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-500">
      <Projects />
    </div>
  )
}
