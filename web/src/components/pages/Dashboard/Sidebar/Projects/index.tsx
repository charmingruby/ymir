import { LuPlus } from 'react-icons/lu'
import { RxCaretDown } from 'react-icons/rx'
import { SectionContainer } from '../SectionContainer'
import { ProjectList } from './ProjectList'

export function Projects() {
  return (
    <SectionContainer>
      <div className="px-6">
        {/* Header */}
        <header className="flex items-center">
          {/* Title */}
          <div className="flex w-full items-center gap-1">
            <span className="text-sm font-medium text-gray-300">Projects</span>
            <RxCaretDown className="mb-px" />
          </div>

          {/* New Project */}
          <div className="cursor-pointer text-gray-300 transition-colors hover:text-primary-300">
            <LuPlus />
          </div>
        </header>
      </div>

      <ProjectList />
    </SectionContainer>
  )
}
