import { HiPlusSm } from 'react-icons/hi'
import {
  SiNodedotjs,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si'

export function HeroArguments() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-300">Independent of Frameworks</p>
      <div className="flex items-center gap-2 text-xl text-gray-300">
        <SiNodedotjs />
        <SiNestjs />
        <SiNextdotjs />
        <SiTypescript />
        <HiPlusSm />
      </div>
    </div>
  )
}
