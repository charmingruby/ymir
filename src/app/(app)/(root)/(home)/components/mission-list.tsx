import { Expand, Wand2, CircleDot } from 'lucide-react'
import { MissionItem } from './mission-item'

export function MissionList() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      <MissionItem
        icon={Expand}
        label="Scalability"
        description="Guarantees seamless scalability with distributed architecture, load balancing, caching, auto-scaling, and robust monitoring."
      />
      <MissionItem
        icon={Wand2}
        label="Ease of use"
        description="Ensures ease of use through an intuitive interface, optimized workflows, and user-friendly features."
      />
      <MissionItem
        icon={CircleDot}
        label="Consistency"
        description="Achieved through dependable synchronization, meticulous transaction management, and unwavering adherence to established rules and standards."
      />
    </div>
  )
}
