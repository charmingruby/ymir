import { Java } from '@/assets/images/langs/Java'
import { DotNet } from '@/assets/images/langs/DotNet'
import { Elixir } from '@/assets/images/langs/Elixir'
import { Go } from '@/assets/images/langs/Go'
import { Node } from '@/assets/images/langs/Node'
import { Python } from '@/assets/images/langs/Python'
import { TechnologyItem } from './technology-item'

export function TechnologyList() {
  return (
    <div className="grid grid-cols-2 mt-12 mb-6 gap-4 lg:grid-cols-3">
      <TechnologyItem icon={Node} />
      <TechnologyItem icon={Go} />
      <TechnologyItem icon={Python} />
      <TechnologyItem icon={Elixir} />
      <TechnologyItem icon={DotNet} />
      <TechnologyItem icon={Java} />
    </div>
  )
}
