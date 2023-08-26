import { AlignRight } from 'lucide-react'

interface BurguerButtonProps {
  onClick: () => void
}

export function BurguerButton({ onClick }: BurguerButtonProps) {
  return (
    <div
      className="cursor-pointer lg:hidden rounded-sm transition-colors group"
      onClick={onClick}
    >
      <AlignRight
        className="group-hover:text-primary-300 group-active:text-primary-300 transition-colors"
        size={24}
      />
    </div>
  )
}
