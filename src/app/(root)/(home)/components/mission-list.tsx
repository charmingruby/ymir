import { Wand2, ScrollText, Target } from 'lucide-react'
import { MissionItem } from './mission-item'

export function MissionList() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      <MissionItem
        icon={Target}
        label="Built-in solutions"
        description="With the seamless integration of our custom interface solutions, we're taking your experience to the next level."
      />
      <MissionItem
        icon={Wand2}
        label="Ease of use"
        description="Ensures ease of use through an intuitive interface, optimized workflows, and user-friendly features."
      />
      <MissionItem
        icon={ScrollText}
        label="Consistency"
        description="Reliable and steadfast, uniformity is ensured  while providing clear and accessible documentation."
      />
    </div>
  )
}
