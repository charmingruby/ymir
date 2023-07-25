import { Advantage } from '@/app/(app)/(home)/contents/advantages'
import { LuCheck } from 'react-icons/lu'

export function AdvantageItem(advantage: Advantage) {
  return (
    <div className="flex gap-2">
      <div className="mt-1">
        <LuCheck className="text-2xl text-success-300" />
      </div>

      <div className="text-lg font-medium text-gray-100">{advantage.title}</div>
    </div>
  )
}
