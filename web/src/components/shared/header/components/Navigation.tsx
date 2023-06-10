import { RxCaretDown } from 'react-icons/rx'

export function Navigation() {
  return (
    <nav className="hidden lg:flex">
      <div className="flex gap-4 text-base font-medium text-gray-50">
        <div>Home</div>
        <div className="flex items-center">
          <span className="">Projects</span>
          <RxCaretDown size={20} className="text-gray-300" />
        </div>
        <div className="flex items-center">
          <span className="">Organizations</span>
          <RxCaretDown size={20} className="text-gray-300" />
        </div>
        <div className="flex items-center">
          <span className="">Developers</span>
          <RxCaretDown size={20} className="text-gray-300" />
        </div>
        <div>Docs</div>
      </div>
    </nav>
  )
}
