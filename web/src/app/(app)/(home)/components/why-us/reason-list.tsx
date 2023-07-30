import { LuExpand, LuWand2, LuCircleDot } from 'react-icons/lu'
import { ReasonItem } from './reason-item'

export function ReasonList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      <ReasonItem
        icon={LuExpand}
        reason="Scalability"
        description="Guarantees seamless scalability with distributed architecture, load balancing, caching, auto-scaling, and robust monitoring."
      />

      <ReasonItem
        icon={LuWand2}
        reason="Ease of use"
        description="Ensures ease of use through an intuitive interface, optimized workflows, and user-friendly features."
      />

      <ReasonItem
        icon={LuCircleDot}
        reason="Consistency"
        description="Achieved through dependable synchronization, meticulous transaction management, and unwavering adherence to established rules and standards."
      />
    </div>
  )
}
