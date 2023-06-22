import { DashboardSidebarSectionsContainer } from './sections-container'
import { HiFilter } from 'react-icons/hi'
import { RxAvatar, RxCaretDown, RxMagnifyingGlass } from 'react-icons/rx'
import { ProjectCard } from './project-card'

export function DashboardSidebarProjects() {
  return (
    <DashboardSidebarSectionsContainer>
      <div className="px-6">
        {/* Title */}
        <div className="flex w-full items-center gap-2">
          <span className="text-sm font-medium text-gray-300">Projects</span>
          <RxCaretDown />
        </div>
      </div>

      <div className="flex items-center gap-2 px-6">
        <div className="flex h-8 w-full items-center gap-2 rounded-md border-2 border-gray-500 bg-gray-700 pl-2 pr-1">
          <RxMagnifyingGlass className="text-gray-400" size={18} />
          <input
            className="w-full text-sm text-gray-50 "
            placeholder="Search projects..."
          />
        </div>

        <HiFilter className="text-gray-200" size={18} />
      </div>

      {/* Projects List */}
      <div>
        <ProjectCard
          image={<RxAvatar />}
          name="Ymir App"
          organization="Ymir.dev"
        />
      </div>
    </DashboardSidebarSectionsContainer>
  )
}
