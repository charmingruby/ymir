import { DUMMY_PROJECTS } from '@/data/DUMMY_DATA'
import { ProjectItem } from './ProjectItem'

export function ProjectList() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        {/* Projects List */}
        {DUMMY_PROJECTS.map((project) => (
          <ProjectItem
            key={project.name}
            name={project.name}
            organization={project.organization}
          />
        ))}
      </div>

      {/* Load more */}
      <div className="flex w-full px-6">
        <span className="cursor-pointer text-sm text-gray-300 transition-colors hover:text-gray-50">
          View all projects
        </span>
      </div>
    </div>
  )
}
