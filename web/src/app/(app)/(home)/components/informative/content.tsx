import { TechnologyList } from './technology-list'
import { Separator } from '@/components/ui/separator'
import { Presentation } from './presentation'
import { TecHelp } from './tec-help'

export function Content() {
  return (
    <div className="flex w-auto flex-col gap-6 md:w-1/2">
      <Presentation />
      <TechnologyList />
      <Separator />
      <TecHelp />
    </div>
  )
}
