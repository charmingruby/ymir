import { ElementType } from 'react'

interface PinProps {
  icon: ElementType
  content: string
}

export function Pin({ icon: Icon, content }: PinProps) {
  return (
    <div className="gap-2 border flex w-auto items-center border-gray-100 pl-1.5 pr-4 shadow-sm py-1.5 rounded-full">
      <div className="bg-primary-300 py-1 px-1 rounded-full text-sm">
        <Icon className="text-gray-50" size={16} />
      </div>
      <span className="text-sm text-gray-400">{content}</span>
    </div>
  )
}
