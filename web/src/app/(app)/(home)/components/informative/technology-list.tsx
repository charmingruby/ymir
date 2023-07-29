import { TechnologyItem } from './technology-item'
import { ReactNode } from 'react'
import { SiNestjs, SiNodedotjs, SiDjango } from 'react-icons/si'
import { FaPhoenixFramework, FaJava } from 'react-icons/fa'
import { TbBrandGolang } from 'react-icons/tb'

export interface Technology {
  name: string
  icon: ReactNode
}

const technologies: Technology[] = [
  { icon: <SiNodedotjs className="text-primary-300" />, name: 'Node' },
  { icon: <SiNestjs className="text-primary-300" />, name: 'Nest' },
  { icon: <FaJava className="text-primary-300" />, name: 'Java' },
  { icon: <TbBrandGolang className="text-primary-300" />, name: 'Go' },
  { icon: <SiDjango className="text-primary-300" />, name: 'Django' },
  {
    icon: <FaPhoenixFramework className="text-primary-300" />,
    name: 'Phoenix',
  },
]

export function TechnologyList() {
  return (
    <div className="grid h-fit w-full grid-cols-3 gap-4">
      {technologies.map((tec) => (
        <TechnologyItem key={tec.name} {...tec} />
      ))}
    </div>
  )
}
