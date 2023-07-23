import { FaPhoenixFramework } from 'react-icons/fa'
import { HiPlusSm } from 'react-icons/hi'
import { SiNodedotjs, SiDjango } from 'react-icons/si'

export function HeroArguments() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-300">Abstracted of technologies</p>
      <div className="flex items-center gap-2 text-xl text-gray-300">
        <SiNodedotjs />
        <SiDjango />
        <FaPhoenixFramework size={22} />
        <HiPlusSm />
      </div>
    </div>
  )
}
