import { RxAvatar } from 'react-icons/rx'

interface ProjectItemProps {
  name: string
  organization: string
}

export function ProjectItem({ name, organization }: ProjectItemProps) {
  return (
    <div className="group flex cursor-pointer flex-col gap-1 px-6 transition-colors hover:bg-gray-600">
      <div className="flex items-center gap-2 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-600 shadow-sm transition-colors group-hover:bg-gray-400">
          <RxAvatar />
        </div>
        <div className="flex flex-1 flex-col items-stretch overflow-hidden">
          <div>
            <span className="font-medium text-gray-50 transition-colors group-hover:text-primary-300">
              {name}
            </span>
          </div>
          <div>
            <small>{organization}</small>
          </div>
        </div>
      </div>
    </div>
  )
}
