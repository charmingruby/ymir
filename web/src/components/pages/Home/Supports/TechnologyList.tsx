import { SupportsContent } from '@/contents/home/supports'
import { TechnologyItem } from './TechnologyItem'

export function TechnologyList() {
  const { supporttedTechnologies } = SupportsContent

  return (
    <div className="grid h-fit w-full gap-4 md:grid-cols-2">
      {supporttedTechnologies.map((tec) => (
        <TechnologyItem key={tec.name} {...tec} />
      ))}
    </div>
  )
}
