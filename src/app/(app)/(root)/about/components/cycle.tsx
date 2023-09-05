import {
  ArrowRight,
  ArrowDown,
  ArrowUp,
  ListTodo,
  Wallet,
  PencilRuler,
  ArrowLeft,
  Users,
} from 'lucide-react'
import { CycleElement } from './cycle-element'

export function Cycle() {
  return (
    <div className="mt-16 flex w-full flex-col">
      {/* Top Cycle */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <CycleElement
            icon={Users}
            title="Create your squad"
            description="Create a project and invite other developers to the team."
          />
          <div className="flex justify-center items-center">
            <ArrowRight className="hidden md:block text-primary-300" />
            <ArrowDown className="block md:hidden text-primary-300" />
          </div>
          <CycleElement
            icon={ListTodo}
            title="Assignments"
            description="Divide projects tasks as sprints per developer."
          />
        </div>
      </div>

      {/* Mid Cycle */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 text-primary-100">
        <div className="hidden md:flex items-center justify-center">
          <ArrowUp />
        </div>
        <div className="flex items-center justify-center">
          <ArrowDown />
        </div>
      </div>

      {/* Bottom Cycle */}
      <div className="mt-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <CycleElement
            icon={PencilRuler}
            title="Services"
            description="Think about the rules business of features to be developed."
          />
          <div className="flex justify-center items-center text-primary-100">
            <ArrowLeft className="hidden md:block text-primary-300" />
            <ArrowDown className="block md:hidden text-primary-300" />
          </div>
          <CycleElement
            icon={Wallet}
            title="Expenses"
            description="Estimate the income and outcome values for the project balance."
          />
        </div>
      </div>
    </div>
  )
}
