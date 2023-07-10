import { Advantage } from '@/contents/home/advantages'

export function AdvantageItem(advantage: Advantage) {
  return (
    <div className="flex flex-row gap-2">
      {/* Adjective + Icon */}
      <div className="flex h-7 w-7 items-center justify-center rounded-md text-primary-300">
        {advantage.icon}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        <header className="text-xl font-bold text-gray-50">
          {advantage.title}
        </header>
        <span className="leading-relaxed text-gray-100">
          {advantage.description}
        </span>
      </div>
    </div>
  )
}
