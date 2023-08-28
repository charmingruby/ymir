import { SolutionItem } from './solution-item'

export function SolutionList() {
  return (
    <div className="mt-12 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SolutionItem />
      <SolutionItem />
      <SolutionItem />
    </div>
  )
}
