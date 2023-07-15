import { TechnologyItem } from './TechnologyItem'
import { ReactNode } from 'react'
import {
  SiTypescript,
  SiNestjs,
  SiNodedotjs,
  SiPrisma,
  SiGraphql,
} from 'react-icons/si'

export interface SupporttedTechnology {
  name: string
  icon: ReactNode
}

const supporttedTechnologies: SupporttedTechnology[] = [
  { icon: <SiTypescript className="text-[#007acc]" />, name: 'TypeScript' },
  { icon: <SiNestjs className="text-[#E0234E]" />, name: 'Nest' },
  { icon: <SiNodedotjs className="text-[#57A645]" />, name: 'Node' },
  { icon: <SiPrisma className="text-[#16A394]" />, name: 'Prisma' },
  { icon: <SiGraphql className="text-[#DE33A6]" />, name: 'Graphql' },
]

export function TechnologyList() {
  return (
    <div className="grid h-fit w-full gap-4 md:grid-cols-2">
      {supporttedTechnologies.map((tec) => (
        <TechnologyItem key={tec.name} {...tec} />
      ))}
    </div>
  )
}
