import { HiOutlineMenuAlt2 } from 'react-icons/hi'

interface MenuToggleButtonProps {
  onClick: () => void
}

export function MenuToggleButton({ onClick }: MenuToggleButtonProps) {
  return (
    <div className="cursor-pointer lg:hidden" onClick={onClick}>
      <HiOutlineMenuAlt2 size={32} />
    </div>
  )
}
