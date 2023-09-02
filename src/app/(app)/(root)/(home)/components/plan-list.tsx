import { Building, User, Users } from 'lucide-react'
import { PlanItem } from './plan-item'

export function PlanList() {
  return (
    <div className="grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PlanItem
        icon={User}
        name="Individual"
        description="Our app serves as an indispensable ally for individuals striving to enhance personal productivity and achieve their unique goals."
      />

      <PlanItem
        icon={Users}
        name="Team"
        description="Empower your teams with a collaboration platform that streamlines communication, project management, and resource sharing, fostering seamless teamwork."
      />

      <PlanItem
        icon={Building}
        name="Enterprise"
        description="Experience enterprise-level productivity optimization with our comprehensive app, tailored to meet the intricate demands and objectives of large organizations."
      />
    </div>
  )
}
