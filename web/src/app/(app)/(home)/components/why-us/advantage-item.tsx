import { LuCheck } from 'react-icons/lu'
import { Advantage } from './advantage-list'

export function AdvantageItem(item: Advantage) {
  return (
    <div className="flex w-full gap-1.5 sm:gap-2">
      <p className="w-full">
        <LuCheck className="inline-flex items-baseline text-lg text-success-300 md:text-2xl" />{' '}
        <span className="text-lg font-medium text-gray-100">
          {item.advantage}
        </span>
      </p>
    </div>
  )
}
