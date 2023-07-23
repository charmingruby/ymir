import { AdvantageItem } from './advantage-item'
import { advantagesContent } from '@/app/(app)/(home)/contents/advantages'

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
