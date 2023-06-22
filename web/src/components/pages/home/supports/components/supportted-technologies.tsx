import { ReactNode } from 'react'
import { TechnologyCard } from './technology-card'
import { SiTypescript, SiNestjs, SiNodedotjs, SiPrisma } from 'react-icons/si'

export interface SupporttedTechnology {
  name: string
  icon: ReactNode
}

const supporttedTechnologies: SupporttedTechnology[] = [
  { icon: <SiTypescript className="text-[#007acc]" />, name: 'TypeScript' },
  { icon: <SiNestjs className="text-[#E0234E]" />, name: 'Nest' },
  { icon: <SiNodedotjs className="text-[#57A645]" />, name: 'Node' },
  { icon: <SiPrisma className="text-[#16A394]" />, name: 'Prisma' },
]

export function SupporttedTechnologies() {
  return (
    <div className="grid h-fit grid-cols-2 gap-4">
      {supporttedTechnologies.map((tec) => (
        <TechnologyCard key={tec.name} {...tec} />
      ))}
    </div>
  )
}
