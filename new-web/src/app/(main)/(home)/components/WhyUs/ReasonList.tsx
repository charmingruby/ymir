import { Expand, Wand2, CircleDot } from 'lucide-react'
import { ReasonItem } from './ReasonItem'

export function ReasonList() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
      <ReasonItem
        icon={Expand}
        label="Scalability"
        description="Guarantees seamless scalability with distributed architecture, load balancing, caching, auto-scaling, and robust monitoring."
      />
      <ReasonItem
        icon={Wand2}
        label="Ease of use"
        description="Ensures ease of use through an intuitive interface, optimized workflows, and user-friendly features."
      />
      <ReasonItem
        icon={CircleDot}
        label="Consistency"
        description="Achieved through dependable synchronization, meticulous transaction management, and unwavering adherence to established rules and standards."
      />
    </div>
  )
}
