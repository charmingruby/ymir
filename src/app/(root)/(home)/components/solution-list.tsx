import { LayoutDashboard, PlaneLanding, ShoppingBag } from 'lucide-react'
import { SolutionItem } from './solution-item'

export function SolutionList() {
  return (
    <div className="mt-12 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SolutionItem
        icon={PlaneLanding}
        title="Landing Pages"
        description="User friendly page to attract customers and to entertain them into the app."
      />
      <SolutionItem
        icon={LayoutDashboard}
        title="Dashboards"
        description="Easy to use and organize metrics into the screen."
      />
      <SolutionItem
        icon={ShoppingBag}
        title="Marketplaces"
        description="Hold customers who want to purchase their products and services."
      />
    </div>
  )
}
