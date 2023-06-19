import { ReactNode } from 'react'

interface ProjectCardProps {
  image: ReactNode
  name: string
  organization: string
}

export function ProjectCard({ image, name, organization }: ProjectCardProps) {
  return (
    <div className="group flex cursor-pointer flex-col gap-1 px-6 transition-colors hover:bg-gray-600">
      <div className="flex items-center gap-2 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-gray-500 bg-gray-600 shadow-sm">
          {image}
        </div>
        <div className="flex flex-1 flex-col items-stretch overflow-hidden">
          <div>
            <span className="font-medium text-gray-50">{name}</span>
          </div>
          <div>
            <small>{organization}</small>
          </div>
        </div>
      </div>
    </div>
  )
}
