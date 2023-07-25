import { Advantage } from '@/app/(app)/(home)/contents/advantages'
import { LuCheck } from 'react-icons/lu'

export function AdvantageItem(advantage: Advantage) {
  return (
    <div className="flex gap-1.5 sm:gap-2">
      <p>
        <LuCheck className="inline-flex items-baseline text-lg text-success-300 md:text-2xl" />{' '}
        <span className="text-lg font-medium text-gray-100">
          {advantage.title}
        </span>
      </p>
    </div>
  )
}
