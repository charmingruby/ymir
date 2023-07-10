import { AdvantageItem } from './AdvantageItem'
import { advantagesContent } from '@/contents/home/advantages'

export function AdvantageList() {
  const { advantagesList } = advantagesContent

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {advantagesList.map((advantage) => (
        <AdvantageItem key={advantage.title} {...advantage} />
      ))}
    </div>
  )
}
