import { AlignRight } from 'lucide-react'

interface BurguerButtonProps {
  onClick: () => void
}

export function BurguerButton({ onClick }: BurguerButtonProps) {
  return (
    <div
      className="cursor-pointer lg:hidden text-gray-50 border p-1 rounded-sm hover:bg-gray-700 transition-colors group border-gray-600"
      onClick={onClick}
    >
      <AlignRight
        className="group-hover:text-primary-300 group-active:text-primary-300 transition-colors"
        size={32}
      />
    </div>
  )
}
