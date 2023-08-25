import { PlanItem } from './PlanItem'
import { Building, User, Users } from 'lucide-react'

export function PlanList() {
  return (
    <div className="grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PlanItem
        icon={User}
        name="Individual"
        description="Use your favorite tech stack to give your marketing team a powerful
          and flexible custom page builder of their own."
      />

      <PlanItem
        icon={Users}
        name="Team"
        description="Use your favorite tech stack to give your marketing team a powerful
          and flexible custom page builder of their own."
      />

      <PlanItem
        icon={Building}
        name="Enterprise"
        description="Use your favorite tech stack to give your marketing team a powerful
          and flexible custom page builder of their own."
      />
    </div>
  )
}
