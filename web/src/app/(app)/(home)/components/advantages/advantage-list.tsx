import { AdvantageItem } from './advantage-item'
import { advantagesContent } from '@/app/(app)/(home)/contents/advantages'

export function AdvantageList() {
  const { advantagesList } = advantagesContent

  return (
    <div className="flex flex-col gap-1.5">
      {advantagesList.map((advantage) => (
        <AdvantageItem key={advantage.title} {...advantage} />
      ))}
    </div>
  )
}
