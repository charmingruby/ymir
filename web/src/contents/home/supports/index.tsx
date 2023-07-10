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

export const SupportsContent = {
  descriptor: 'Special supports',
  title: 'Better integrations',
  description:
    'Elevate Your Innovation: Tailored Support for Advanced Technologies. Explore our dedicated section, offering specialized features and support for cutting-edge technologies. Achieve remarkable results with our comprehensive technology support.',
  supporttedTechnologies,
}
